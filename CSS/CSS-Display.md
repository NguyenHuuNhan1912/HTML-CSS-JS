# THUỘC TÍNH DISPLAY TRONG CSS
## Trước khi tìm hiểu về thuộc tính Display và các giá trị của nó như inline, block, inline-block, none thì ta sẽ tìm hiểu phần tử `inline` và `block` là gì ?
## Trong HTML phần tử được chia thành **2 loại**: phần tử thuộc dạng `inline` và phần tử thuộc dạng `block`
* Phần tử thuộc dạng block
  * Sẽ bắt đầu trên một dòng mới
  * Chiếm hết chiều ngang của phần tử chứa nó tức là các thẻ div, p, h1-h6, sẽ chiếm chiều ngang 100% của trang web
* Phần tử thuộc dạng inline thì ngược lại
  * Không nhất thiết phải bắt đầu trên một dòng mới
  * Chỉ chiếm không gian chiều ngang theo nội dung của phần tử đó một số thẻ inline như: a, ul, li, span
  * Không thể thay đổi kích thước của các thẻ inline tức không thể áp dụng được css width/height vào các thẻ inline
* `Đặc biệt` có thể chuyển 1 phần tử `inline` sang `block` và ngược lại dùng thuộc tính `Display` trong `CSS`
  * `Display: inline;` -> Chuyển các phần tử dạng inline sang dạng block
  * `Display: block;` -> Chuyển các phần tử dạng block sang dạng inline
  * `Display: inline-block`; -> Kết hợp cả 2 cách trên, tức là phần tử không nhất thiết phải nằm trên 1 dòng mới mà vẫn `thừa hưởng đặc tính của block`
  * Display: none; -> Ẩn 1 phần tử khỏi trang web
## VD về giá trị inline-block trong của thuộc tính display trong CSS
### Có HTML cơ bản như sau 
```
<html>
<head>
    <title>CSS - Display</title>
    <style>
        a{
            background-color:blueviolet; <!--Nền xanh tím-->
            color:white; <!--Chữ có màu trắng-->
            width: 100px; <!--Chiều rộng 100px-->
            height:100px; <!--Chiều cao 100px-->
            display: block; <!--Chuyền từ inline sang block-->
        }
    </style>
</head>
<body>
       <a href="#">Học HTML tại đây</a>
       <a href="#">Học Java tại đây</a>
       <a href="#">Học Python tại đây</a>
</body>
</html>
```
## Yêu cầu đặt ra là đoạn code trên `có thể tăng kích thước của các thẻ a` và `đặt chúng trên cùng một dòng hay không ?`
#### Với định dạng display: block; thì chúng ta `có thể tăng kích thước của thẻ a` bằng cách width=height=100px như code trên *NHƯNG* lại không thỏa điều kiện `đặt các thẻ trên cùng một hàng ngang` *BỞI VÌ* các thẻ a đang ở dạng `block` để `khắc phục` thì chúng ta sẽ display lại thành giá trị là `inline-block` thì sẽ thỏa được `cả 2 yêu cầu` đề bài đưa ra
### Đây là đoạn code hợp lệ với yêu cầu đề bài sau khi được chỉnh sửa
```
<html>
<head>
    <title>CSS - Display</title>
    <style>
        a{
            background-color:blueviolet;
            color:white;
            width: 100px;
            height:100px;
            display: inline-block; <!--Lúc này đã kết hợp được giữa inline và block -> Thỏa yêu cầu đề bài-->
        }
    </style>
</head>
<body>
       <a href="#">Học HTML tại đây</a>
       <a href="#">Học Java tại đây</a>
       <a href="#">Học Python tại đây</a>
</body>
</html>
```
## Hình ảnh minh họa cho 2 đoạn code 
## Hình ảnh *display: block;*
<img src="https://github.com/NguyenHuuNhan1912/HTML-CSS-JS/blob/main/Images/image-1.jpg">

## Hình ảnh *display: inline-block;*

<img src="https://github.com/NguyenHuuNhan1912/HTML-CSS-JS/blob/main/Images/image-2.jpg">

<hr>

*References by W3SCHOOL*

*Made by Nguyen Huu Nhan*
