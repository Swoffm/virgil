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
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;

        public BookController(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }


        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {

            return Ok(_bookRepository.GetAll(userId));
        }

        [HttpGet("q={userId}/b={bookId}")]
        public IActionResult Get(int userId, int bookId)
        {
            return Ok(_bookRepository.GetBook(userId, bookId));
        }

        [HttpDelete("b={bookId}")]
        public IActionResult Delete(int bookId)
        {
            _bookRepository.DeleteBook(bookId);
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post(Book book)
        {
            _bookRepository.AddBook(book);
            return CreatedAtAction("Get", new { id = book.Id }, book);
        }

        [HttpPut("{id}")]
        public IActionResult Put(Book book)
        {
            _bookRepository.UpdateBook(book);
            return NoContent();
        }

        
        



    }
}
