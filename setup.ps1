$projects = @("dotnetcore\api\InfoTrack.Microservice.Sample")

foreach($project in $projects)
{
    #clean up visual studio builds
    Remove-Item $project\.vs -force -recurse -ErrorAction SilentlyContinue
    Remove-Item $project\bin -force -recurse -ErrorAction SilentlyContinue
    Remove-Item $project\obj -force -recurse -ErrorAction SilentlyContinue

    Write-Host "Setup project " $project
    #Let uninstall old ones
    #donet uninstall bug need to get full path
    [string]$curDir=Get-Location
    dotnet new --uninstall ($curDir + "\" + $project) >  $null

    #Install
    dotnet new --install $project
}