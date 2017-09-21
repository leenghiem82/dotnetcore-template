# InfoTrack.Microservice.Sample

{{Description}}

# Prerequisites:
### 1. Install Dotnet Core 2.0 Sdk
<a href="https://download.microsoft.com/download/0/F/D/0FD852A4-7EA1-4E2A-983A-0484AC19B92C/dotnet-sdk-2.0.0-win-x64.exe">download</a>
### 2. Setup docker
**2.1. Enable cpu virtualization**<br/>
Restart your ***PC*** and press the ***F10*** key<br/>
Go to ***Security*** -> enable ***Hypervisor*** <br/>
**2.2. Install docker**
<a href="https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe">download</a>        

# How to debug

`npm install`

### Recommendation
1. Setup your api project as start up project so you can debug and developer much faster and easier without spending time build container every change.
2. Right click on **docker-compose** project : ***Debug*** -> ***Start new instance*** so it can be run in actual container for your final testing before check in.

# How to get my application log

1. Check kibana:
<a href="http://search-auaws-logging-test-rpdiznttcfjdenw24nkjlmh6si.ap-southeast-2.es.amazonaws.com/_plugin/kibana/app/kibana#/discover?_g=()&_a=(columns:!(_source),index:'*',interval:auto,query:(query_string:(analyze_wildcard:!t,query:'*')),sort:!('@timestamp',desc))">InfoTrack Kibana Test</a>

2. Query filter your application:

```
{
  "query": {
    "match": {
      "fields.Environment": {
        "query": "Local",
        "type": "phrase"
      }
    }
  }
}
```

#### Note
Don't use string manipulation when logging <br/>
&#x1F534; Wrong: <span style="color:red">  `Log.Logger.Debug("Get values {values}", result);` </span> <br/>
&#x1F49A; Correct: <span style="color:green"> `Log.Logger.Debug("Get values {values}", result);`  </span> <br/>

