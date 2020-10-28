using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VirgilWebApi.Model;
using VirgilWebApi.Repositories;

namespace VirgilWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            return Ok(_categoryRepository.GetAll(userId));
        }


        [HttpGet("c={categoryId}")]
        public IActionResult GetCategory(int categoryId)
        {

            return Ok(_categoryRepository.GetById(categoryId));
        }

        [HttpDelete("{categoryId}")]
        public IActionResult Delete(int categoryId)
        {
            _categoryRepository.DeleteCategory(categoryId);
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            _categoryRepository.CreateCategory(category);
            return CreatedAtAction("Get", new { id = category.Id }, category);
        }


        [HttpPut]
        public IActionResult Put(Category category)
        {
            _categoryRepository.UpdateCategory(category);
            return NoContent();
        }



    }
}
