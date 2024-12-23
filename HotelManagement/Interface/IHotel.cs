using HotelManagement.Response;

namespace HotelManagement.Interface
{
    public interface IHotel
    {

            Task<List<HotelResponse>> GetHotelData();
            Task<HotelResponse> GetHotelData(int id);
  


        
    }
}
