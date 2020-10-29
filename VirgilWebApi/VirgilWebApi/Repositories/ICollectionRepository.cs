using System;
using System.Collections.Generic;
using VirgilWebApi.Model;
using System.Linq;
using System.Threading.Tasks;

namespace VirgilWebApi.Repositories
{
    public interface ICollectionRepository
    {
        List<Collection> GetAll(int userID);

        List<Book> GetAllBooksInCollection(int collectionId);

        Collection GetById(int collectionId);

        public void CreateCollection(Collection collection);

        public void UpdateCollection(Collection collection);

        public void DeleteCollection(int collectionId);
    }
}
