using System;

namespace WebShop.Domain.Fees
{
	public class Fee
	{
		public decimal Net { get; set; }
		public decimal VatRate { get; set; }
		public decimal Gross { get; set; }
	}
}

