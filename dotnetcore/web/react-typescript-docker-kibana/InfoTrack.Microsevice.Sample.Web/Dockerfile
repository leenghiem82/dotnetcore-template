FROM microsoft/aspnetcore:2.0
ARG source
WORKDIR /app
EXPOSE 80

# set up node
RUN apt-get update && apt-get install -y nodejs && \
	ln -s `which nodejs` /usr/bin/node

 # copy the ASP.NET packages manifest
COPY ${source:-obj/Docker/publish} .

ENTRYPOINT ["dotnet", "ConsumerMapIT.Web.dll"]
