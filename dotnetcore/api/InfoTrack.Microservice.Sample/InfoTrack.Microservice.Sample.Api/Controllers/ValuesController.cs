using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace InfoTrack.Microservice.Sample.Api.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var result  = new[] { "value1", "value2" };
            Log.Logger.Debug("Get values {values}", result);

            return result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id) => "value";

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
            Log.Logger.Debug("Put value {value}", value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            Log.Logger.Debug("Put {id} with value {value}", id, value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Log.Logger.Debug("Delete id {id}", id);
        }
    }
}
