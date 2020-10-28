using Microsoft.AspNetCore.Authentication.OAuth.Claims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirgilWebApi.Model;

namespace VirgilWebApi.Repositories
{
   public interface IBookRepository
    {
        public List<Book> GetAll(int userId);

        public Book GetBook(int userId, int bookId);

        public void DeleteBook(int bookId);

        public void UpdateBook(Book book);
        public void AddBook(Book book);
    }
}
