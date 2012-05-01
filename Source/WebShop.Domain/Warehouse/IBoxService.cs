using WebShop.Concepts.Products;

namespace WebShop.Domain.Warehouse
{
	public interface IBoxService
	{
		decimal GetWeightFor(ProductId productId);
		Dimension GetDimensionFor(ProductId productId);
	}
}

