using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirgilWebApi.Model;

namespace VirgilWebApi.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll(int userId);
        Category GetById(int categoryId);
        public void CreateCategory(Category category);

        public void UpdateCategory(Category category);
        public void DeleteCategory(int categoryId);
    }
}
