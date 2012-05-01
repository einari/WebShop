using System;

namespace WebShop.Infrastructure.Security
{
	public interface IUserService
	{
		User GetCurrentUser();
	}
}

