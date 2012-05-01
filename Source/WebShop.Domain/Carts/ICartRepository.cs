using System;

namespace WebShop.Domain.Carts
{
	public interface ICartRepository
	{
		Cart GetForCurrentUser();
	}
}

