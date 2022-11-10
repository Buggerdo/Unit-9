using System.ComponentModel.DataAnnotations;

namespace RestaurantFaves.DbModels
{
    public class Order
    {
        [Key]
        public long Id { get; set; }
        
        public string Description { get; set; }


        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Required]
        public string Restaurant { get; set; }

        [Range(1, 5)]
        public int Rating { get; set; }

        public bool OrderAgain { get; set; } = false;
    }
}
//dotnet user-secrets set "DefaultConnection" "Data Source=TROYPC;Initial Catalog=RestaurantFaves;Integrated Security=SSPI;"
