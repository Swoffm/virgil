using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VirgilWebApi.Repositories;
using VirgilWebApi.Model;


namespace VirgilWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserLogIn : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;

        public UserLogIn(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet("{name}")]
        public IActionResult Get(string name)
        {
           var user = _userProfileRepository.GetByUserName(name);
            
            return Ok(user);
        } 


        [HttpPost]
        public IActionResult Post(UserProfile profile)
        {
            _userProfileRepository.CreateUserAccount(profile);
            return NoContent();
        }



        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userProfileRepository.DeleteUserAccount(id);
            return NoContent();
        }


    }
}
