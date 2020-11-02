using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirgilWebApi.Model;

namespace VirgilWebApi.Repositories
{
   public interface IUserProfileRepository
    {
        public UserProfile GetByUserName(string name);

        public List<UserProfile> GetAll();

        public void CreateUserAccount(UserProfile profile);

        public void DeleteUserAccount(int userId);
    }
}
