using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Foods.Models
{
    public class Food
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName="varchar(50)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName ="int")]
        public int Calories { get; set; }
    }
}
