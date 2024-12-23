using HotelManagement.Interface;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    //[ApiController]
    //[Route("api/[controller]")]
    public class HotelController : ControllerBase
        {
            private readonly IHotel hotel;

        public HotelController(IHotel hotel)
        {
            this.hotel = hotel;
        }

        /// <summary>
        /// Gets all hotel data.
        /// </summary>
        /// <returns>The hotel data list or a 404 response if not found.</returns>
        [HttpGet("api/hotels")]
        public async Task<IActionResult> GetHotelData()
        {
            var response = await hotel.GetHotelData();
            try
            {

                if (response == null || response.Count == 0)
                {
                    return NotFound(new { ResponseData = response, ResponseCode = 404, ResponseMessage = "No Hotel Data Found" });
                }

              
                return Ok(new { ResponseData = response, ResponseCode = 200, ResponseMessage = "Success" });
            }

            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Server or data reading errors .", error = ex.Message });
            }
        }

        /// <summary>
        /// Gets a hotel data by its  id.
        /// </summary>
        /// <param name="id">The id of the hotel.</param>
        /// <returns>The hotel data or a 404 response if not found.</returns>
        [HttpGet("api/hotels/{id}")]
        public async Task<IActionResult> GetHotelData(int id)
        {
            var response = await hotel.GetHotelData(id);

            try
            {

                if (response == null)
                {
                    return NotFound(new { ResponseData = response, ResponseCode = 404, ResponseMessage = "No Hotel Data Found or Invalid Id" });
                }

                return Ok(new { ResponseData = response, ResponseCode = 200, ResponseMessage = "Success" });
            }

            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Server or data reading errors .", error = ex.Message });
            }
        }

    }
}
