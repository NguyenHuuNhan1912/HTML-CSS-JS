# FLOAT VÀ CLEAR TRONG CSS
## `Float` trong CSS là cách để chuyển một phần tử sang góc trái hoặc phải của không gian bao quanh nó còn `Clear` là ngược lại với `Float` được sử dụng để `ngăn` không cho phần tử đó di chuyển qua trái hay qua phải
### Float có 4 giá trị quan trọng
* Giá trị `left`: Cố định phần tử về bên phái và cho phép các phần tử sau nổi lên bên cạnh không gian còn thừa của phần tử ban đầu -> `float: left;`
* Giá trị `right`: Cố định phần tử về bên phải và cho phép các phần tử sau nổi lên bên cạnh không gian còn thừa của phần tử ban đầu -> `float: right;`
* Giá trị `none`: Đây là giá trị mặc định ban đầu phần tử sẽ không di chuyển qua trái hay phải mà nằm đúng vị trí của nó -> `float: none`
* Giá trị `inherit`: Phần tử sẽ kế thừa giá trị từ float cha có nghĩa là phần tử cha float bên nào phần tử có giá trị `inherit` cũng sẽ float bên đó -> `float:inherit;`
### Clear như đã trình bày ở trên là để ngăn 1 phần tử không cho nó tràn về bên trái hoặc phải
* Ví dụ phần tử a đã `loat: left;` -> tức a đã tràn về bên trái thì hiển nhiên những phần tử `sau a` sẽ nổi lên và nằm cạnh bên của phần tử a nếu còn không gian
* Để cho phần tử sau a vẫn nằm chỗ cũ mà không bị tràn lên thì ta `clear: left;`
### Nếu ta không muốn sử dụng kĩ thuật `clear:left;` như trên thì chúng ta có 1 kĩ thuật nhanh hơn và khuyến khích được sử dụng đó chính là `clearfix` muốn sử dụng được clearfix thì chúng ta phải biết thuộc tính overflow là gì
# OVERFLOW TRONG CSS
## Overflow trong CSS để xử lý những trường hợp tràn nội dung của một phần tử
* Giá trị `visible`: Nội dung tràn thì cũng không làm gì cả vì đây là một giá trị mặc định
* Giá trị `hidden`: Khi 1 phần tử có `kích thước nhỏ` mà `nội dung quá lớn` thì nội dung đó sẽ bị `tràn ra ngoài`, giá trị `hidden` cho phép chúng ta `ẩn giấu` phần bị tràn đó đi, *NHƯNG* nội dung đó quan trọng mà bị ẩn đi thì *không hề tốt* đối với người dùng
* Giá trị `scroll`: Đây là cách khắc phục của giá trị `hidden` nếu nội dung bị tràn thì giá trị `scroll` sẽ tạo 1 thanh cuộn giúp người dùng có thể cuộn những nội dung cần xem, *NHƯNG* nhược điểm của giá trị này đó là nội dung cho dù *có tràn* hay *không tràn* thì nó *vẫn tạo thanh cuộn*
* Giá trị `auto`: Đây là cách khắc phục của giá trị `scroll` giá trị `auto` chỉ tạo thanh cuộn khi nội dung bị tràn ngược lại thì không tạo gì cả
* Giá trị `inherit`:Đây là giá trị xác định thừa hưởng thuộc tính từ thành phần cha - Thành phần bên ngoài có giá trị gì thì thành phần có giá trị `inherit` sẽ có giá trị đó
## Áp dụng thuộc tính `Overflow` để sử dụng kĩ thuật `Clearfix`
### Như đã trình bày trên phần Float và Clear trong CSS nếu chúng ta không muốn một phần tử bị nổi lên cạnh phần tử có float left hoặc right thì chúng ta sẽ sử dụng `clear:left/right` hoặc kĩ thuật `clearfix`
### Ta sẽ áp dụng thuộc tính Overflow để sử dụng kĩ thuật `Clearfix`
### Chúng ta sử dụng `clearfix` trong trường hợp `không muốn 1 phần tử bị nổi lên phần tử trước đó` hoặc sử dụng trong trường hợp `điều chỉnh chiều cao của thẻ cha tương đương với chiều cao của mọi thẻ con để nội dung bên dưới không bị đè`
* Như đã trình bày các `giá trị` của `thuộc tính overflow` trong đó có 1 giá trị là `auto` để áp dụng cho kĩ thuật `clearfix` này
* Chỉ cần CSS: `overflow: auto;` là chúng ta đã có thể `clearfix` 1 cách `đơn giản nhất` và dễ nhất ngoài ra còn nhiều cách `clearfix phức tạp` và `hay hơn` trong nội dung này chỉ dừng lại ở mức cơ bản
 <hr>
 
 *Made by Nguyen Huu Nhan*
