﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HTApi.Models
{
    public class TollBooth
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual Location Location { get; set; }
    }
}
