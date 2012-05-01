using System.Collections.Generic;
using WebShop.Domain.Accounts;
using WebShop.Domain.Fees;

namespace WebShop.Domain.Orders
{
	public class Order
	{
		List<OrderLine> _lines = new List<OrderLine>();
		List<Fee> _fees = new List<Fee>();
		
		public Account Account { get; set; }
		
		public Address DeliveryAddress { get; set; }
		
		public Address InvoiceAddress { get; set; }
		
		public IEnumerable<OrderLine> Lines { get { return _lines; } }
		
		public decimal TotalLinesNetPrice { get; set; }
		public decimal TotalLinesGrossPrice { get; set; }

		public IEnumerable<Fee> Fees { get { return _fees; } }
		
		public decimal TotalNetPrice { get; set; }
		public decimal TotalGrossPrice { get; set; }
	}
}

