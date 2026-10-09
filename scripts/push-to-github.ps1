$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$repositoryUrl = 'https://github.com/SigridSolver/Agustiniana-1.2.git'
$checkoutRoot = Join-Path $projectRoot ('.github-push/' + [guid]::NewGuid().ToString('N'))

function Invoke-Git {
    param([string[]]$GitArguments)
    & git @GitArguments
    if ($LASTEXITCODE -ne 0) {
        throw "Git failed: git $($GitArguments -join ' '). No force push was performed."
    }
}

# Start from the remote default branch, preserving the repository's history.
New-Item -ItemType Directory -Path (Split-Path -Parent $checkoutRoot) -Force | Out-Null
Invoke-Git -GitArguments @('clone', $repositoryUrl, $checkoutRoot)

$projectPaths = @(
    'src', 'scripts', '.gitignore', '.env.example', 'index.html',
    'metadata.json', 'package.json', 'tsconfig.json', 'vite.config.ts',
    'Mercadeo.txt', 'Comunicacion social.txt', 'Licenciatura en lenguas extranjeras.md'
)

foreach ($relativePath in $projectPaths) {
    $sourcePath = Join-Path $projectRoot $relativePath
    $destinationPath = Join-Path $checkoutRoot $relativePath
    if (Test-Path -LiteralPath $sourcePath -PathType Container) {
        New-Item -ItemType Directory -Path $destinationPath -Force | Out-Null
        Get-ChildItem -LiteralPath $sourcePath -Force | ForEach-Object {
            Copy-Item -LiteralPath $_.FullName -Destination $destinationPath -Recurse -Force
        }
    } else {
        Copy-Item -LiteralPath $sourcePath -Destination $destinationPath -Force
    }
}

Push-Location -LiteralPath $checkoutRoot
try {
    Invoke-Git -GitArguments (@('add', '--') + $projectPaths)
    Invoke-Git -GitArguments @('diff', '--cached', '--stat')
    & git diff --cached --quiet
    $diffResult = $LASTEXITCODE
    if ($diffResult -eq 0) {
        Write-Host 'The remote repository already contains these files.'
        return
    }
    if ($diffResult -ne 1) { throw 'Unable to inspect staged changes.' }
    Invoke-Git -GitArguments @('commit', '-m', 'Add Marketing, Social Communication and Foreign Languages fieldwork')
    Invoke-Git -GitArguments @('push', 'origin', 'HEAD')
    Write-Host "Push completed: $repositoryUrl"
} finally {
    Pop-Location
    Write-Host "Git checkout retained at: $checkoutRoot"
}
