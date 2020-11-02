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
    public class CollectionController : ControllerBase
    {
        private readonly ICollectionRepository _collectionRepository;

        public CollectionController(ICollectionRepository collectionRepository)
        {
            _collectionRepository = collectionRepository;
        }


        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            return Ok(_collectionRepository.GetAll(userId));
        }

        [HttpGet("cb={colId}")]
        public IActionResult GetBooks(int colId)
        {
            return Ok(_collectionRepository.GetAllBooksInCollection(colId));
        }

        [HttpGet("c={colId}")]
        public IActionResult GetCollection(int colId)
        {
            return Ok(_collectionRepository.GetById(colId));
        }

        [HttpDelete("{colId}")]
        public IActionResult Delete(int colId)
        {
            _collectionRepository.DeleteCollection(colId);
            return NoContent();
        }


        [HttpPost]
        public IActionResult Post(Collection col)
        {
            _collectionRepository.CreateCollection(col);
            return NoContent();
        }


        [HttpPost("b={bookId}/c={colId}")]
        public IActionResult Post(int bookId, int colId)
        {
            _collectionRepository.AddBookToCollection(bookId, colId);
            return NoContent();
        }


        [HttpPut]
        public IActionResult Put(Collection collection)
        {
            _collectionRepository.UpdateCollection(collection);
            return NoContent();
        }

        [HttpDelete("c={id}")]
        public IActionResult DeleteBook(int id)
        {
            _collectionRepository.DeleteBookFromCollection(id);
            return NoContent();
        }


    }
}
