# BACKGROUND TRONG CSS

<hr>

* Thuộc tính `background-color`: Xác định màu nền -> `background-color: red;`
* Thuộc tính `opacity`: Xác định đồ mờ của nền -> `opacity: 0.3;`
* Thuộc tính `background-image` với giá trị `url`: Cho phép lấy 1 hình ảnh làm nền -> `background-image: url('link')`
* Thuộc tính `background-image` với giá trị `linear-gradient(ndeg,color-1,color-2)`: Cho phép tạo 1 `dãy màu chuyển `
  * ndeg: là góc để chuyển màu có giá trị từ `0-360 độ` 
  * color-1 và color-2: là 2 màu chuyển 
* Thuộc tính `background-repeat`: Mặc định 1 hình ảnh có kích thước quá lớn hình ảnh đó sẽ tự động lặp lại có 3 giá trị để điều chỉnh sự lặp lại đó
  * Giá trị `repeat-x`: Khi hình ảnh có kích thước quá lớn thì ảnh sẽ lặp lại theo chiều ngang -> `background-repeat: repeat-x;`
  * Giá trị `repeat-y`: Khi hình ảnh có kích thước quá lớn thì ảnh sẽ lặp lại theo chiều dọc -> `background-repeat: repeat-y;`
  * Giá trị `no-repeat`: Hình ảnh sẽ hiển thị đúng kích thước mà không lặp lại -> `background-repeat: no-repeat;`
* Thuộc tính `background-size`  
  * `background-size: 200px 200px` -> Thay đổi chiều rộng và chiều cao của 1 hình ảnh
  * Giá trị `cover`: Hình ảnh sẽ bao phủ toàn bộ nền -> `background-size: cover;`
* Thuộc tính `background-position`: Xác định hình ảnh nằm ở đâu trên màn hình
    * Giá trị `left`: Xác định hình ảnh nằm bên trái màn hình -> `background-position: left;`
    * Giá trị `right`: Xác định hình ảnh nằm bên phải màn hình -> `background-position: right;`
    * Giá trị `center`: Xác định hình ảnh nằm ở giữa màn hình -> `background-position: center;`
    * Ngoài ra còn có các giá trí khác như: top right, top lef,...
* Thuộc tính `background-Attachment`: Cố định 1 hình ảnh khi người dùng cuộn trang -> `background-Attachment: fixed`
* Thuộc tính `background-clip`: Xác định khu vực cần tô nền
  * Giá trị `content-box`: tô nền nội dung -> `background-clip: content-box;`
  * Giá trị `border-box`: tô nền khung -> `background-clip: border-box;`
  * Giá trị `padding-box`: tô nền phần đệm -> `background-clip: padding-box;`
  * Giá trị `inherit`: kế thừa giá trị thuộc tính `background-clip` từ phần tử cha của nó -> `background-clip: inherit;`

<hr>

*Made by Nguyen Huu Nhan*
 
