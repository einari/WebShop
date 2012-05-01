using WebShop.Concepts.Location;
using WebShop.Domain.Carts;
using WebShop.Domain.Payment;

namespace WebShop.Domain.Orders
{
	public interface IOrderService
	{
		Order CreateFromCart(Cart cart);
		void SetDeliveryAddress(Order order, Address address);
		void SetPaymentMethod(Order order, PaymentMethod method);
	}
}

