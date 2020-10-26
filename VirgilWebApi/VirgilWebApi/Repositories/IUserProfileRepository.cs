using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirgilWebApi.Model;

namespace VirgilWebApi.Repositories
{
   public interface IUserProfileRepository
    {
        UserProfile GetByUserName(string name);
    }
}
