using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DogsAPI.Models
{
    public class Dog
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName ="varchar(50)")]
        public string Rasa { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int Varsta { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int Greutate { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Sex { get; set; }
  
    }
}
