# CHIỀU RỘNG TỐI ĐA TRONG CSS
## Thuộc tính `max - width` được sử dụng để thiết lập chiều rộng tối đa của một phần tử
### Sự khác nhau của `width và max-width`
  * Khi sử dụng thuộc tính `width` để `thiết lập chiều rộng` cho phần tử thì khi chúng ta `thay đổi kích thước trình duyệt lớn hơn` thì nội dung `sẽ bị tràn `và nó `không còn` đúng chiều rộng ban đầu nữa
  * Khi sử dụng thuộc tính `max-width` `để thiết lập chiều rộng` cho phần tử thì `dù có thay đổi kích thước trình duyệt` thì kích thước phần tử `không bị tràn` mà `vẫn giữ nguyên` đúng chiều rộng ban đầu của nó -> Sau này sẽ rất `tiện lợi` cho việc `responsive`
  * Ta có đoạn code HTML cơ bản sau
  ```
<!DOCTYPE html>
<html>
<head>
    <title>Max-Width</title>
    <style>
        .element-1{
            background-color: blue;
            width: 1000px;
        }
        .element-2{
            background-color: lightblue;
            max-width: 1000px;

        }
    </style>
</head>
<body>
    <div>
        <div class="element-1">Sử dụng thuộc tính - Width</div>
        <div class="element-2">Sử dụng thuộc tính - Max-Width</div>
    </div>
</body>
</html>
  ```
  * Ta thấy hình ảnh bên dưới vẫn bình thường cả 2 khối đều bằng nhau vì `chưa thay đổi kích thước trình duyệt`
  <img src="https://github.com/NguyenHuuNhan1912/HTML-CSS-JS/blob/main/Images/image-3.jpg">
  
  * Còn hình ảnh này `đã có sự khác biệt`, hình ảnh được `set max-width` `không bị tràn và vẫn giữ nguyên được chiều rộng ban đầu` trong khi thuộc tính `width` `đã bị tràn và chiều rộng cũng bị thay đổi`
  <img src="https://github.com/NguyenHuuNhan1912/HTML-CSS-JS/blob/main/Images/image-4.jpg">
  
<hr>

Made by Nguyen Huu Nhan

