# dotnetcore-template

This repository contains InfoTrack common templates. The purpose of this project to reduce development time. 

# How to use

## 1. Install templates
### 1.1 Clone to your local
`git clone https://github.com/leenghieminfo/dotnetcore-template.git`

### 1.2 Setup templates
Run following command in powershell with administrative privileges.
`cd dotnetcore-template`
`.\setup.ps1`

You should see **infoapi** template in your console. If not , please contact author. 

## 2. Setup new project
Browse to your project folder and running following command 
`dotnet new infoapi -n "YourAPiName" -o "YourApiName"
You should see message:
`The template "YourApiName" was created successfully.`


# How to change
You visual studio to build , test and make changes.
Make sure you run "setup.ps1" before checkin.
