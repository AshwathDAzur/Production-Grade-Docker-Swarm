﻿FROM  mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app
 
# Copy necessary files and restore as distinct layer
COPY *.csproj ./
RUN dotnet restore
 
# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out
 
# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/out .
 
# Expose ports
EXPOSE 5087/tcp
ENV ASPNETCORE_URLS http://*:5087
HEALTHCHECK --interval=30s --timeout=3s --retries=1 CMD curl --silent --fail http://localhost:5087/healthCheck || exit 1
 
# Start
ENTRYPOINT ["dotnet", "EmployeeManagementAPI.dll"]