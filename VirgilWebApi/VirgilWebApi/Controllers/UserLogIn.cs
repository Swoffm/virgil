using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VirgilWebApi.Repositories;

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


        [HttpGet]
        public IActionResult Get(string name)
        {
            return Ok(_userProfileRepository.GetByUserName(name));
        }



    }
}
