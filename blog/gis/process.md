# 数据处理

## GDAL

- [GDAL](https://gdal.org)
- [GeoRust GDAL](https://github.com/georust/gdal)

::: warning windows下安装Rust版本GDAL(目前仅支持GDAL v3.7.x版本)
:::

#### 方式一: 手动按照教程安装

> [安装教程](https://github.com/me9rez/Windows-Install-Rust-Gdal-Tutorial)

#### 方式二: 使用powsershell脚本安装

```bash
# install.ps1
$gdal_home=Join-Path -Path $PSScriptRoot -ChildPath "gdal"
$gdal_bin=Join-Path -Path $PSScriptRoot -ChildPath "gdal\bin"
$gdal_apps=Join-Path -Path $PSScriptRoot -ChildPath "gdal\bin\gdal\apps"
$proj_lib=Join-Path -Path $PSScriptRoot -ChildPath "gdal\bin\proj9\share"
$gdal_pc_path=Join-Path -Path $PSScriptRoot -ChildPath "gdal\gdal.pc"

$User = [System.EnvironmentVariableTarget]::User
$Path = [System.Environment]::GetEnvironmentVariable('Path', $User)
[System.Environment]::SetEnvironmentVariable('Path', "${Path};${gdal_bin}", $User)
$Path2 = [System.Environment]::GetEnvironmentVariable('Path', $User)
[System.Environment]::SetEnvironmentVariable('Path', "${Path2};${gdal_apps}", $User)

[System.Environment]::SetEnvironmentVariable('GDAL_HOME', "${gdal_home}", $User)
[System.Environment]::SetEnvironmentVariable('PKG_CONFIG_PATH', "${gdal_home}", $User)
[System.Environment]::SetEnvironmentVariable('PROJ_LIB', "${proj_lib}", $User)
[System.Environment]::SetEnvironmentVariable('GDAL_VERSION', "373", $User)

# 1、download gdal and libs

curl -o  gdal.zip "https://build2.gisinternals.com/sdk/downloads/release-1930-x64-gdal-3-7-3-mapserver-8-0-1.zip"
curl -o  gdal-libs.zip "https://build2.gisinternals.com/sdk/downloads/release-1930-x64-gdal-3-7-3-mapserver-8-0-1-libs.zip"

# 2、unzip gdal.zip gdll-libs.zip

7z x gdal.zip -o"${gdal_home}"
7z x gdal-libs.zip -o"${gdal_home}"

# 3、install pkgconfiglite

choco install pkgconfiglite -y

# 4、set env variable

$gdal_content = @'
name=gdal
prefix=/usr
exec_prefix=${prefix}
libdir=${exec_prefix}/lib
includedir=${exec_prefix}/include
datadir=${prefix}/share/${name}

Name: lib${name}
Description: Geospatial Data Abstraction Library
Version: 3.7.3
Libs: -L${libdir} -l${name}
Cflags: -I${includedir}/${name}
'@

# 5、write gdal.pc
Set-Content -Path $gdal_pc_path -Value $gdal_content
```


## GEOS

- [GEOS](https://libgeos.org/)

## PROJ

- [PROJ](https://proj.org)

## SFCGAL

- [SFCGAL](https://sfcgal.gitlab.io/SFCGAL/)


## Gltf

> https://github.com/KhronosGroup/glTF

> https://github.com/KhronosGroup/glTF-Tutorials

> https://github.com/gltf-rs/gltf

> https://github.com/CesiumGS/gltf-pipeline

> https://github.com/syoyo/tinygltf

> https://github.com/donmccurdy/glTF-Transform

> https://github.com/vpenades/SharpGLTF

> https://github.com/qmuntal/gltf

> https://github.com/mikedh/trimesh

## 工具网站

> https://github.com/mbloch/mapshaper

> https://geojson.io/

> https://epsg.io/