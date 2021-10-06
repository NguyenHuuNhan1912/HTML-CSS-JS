# ĐƯỜNG VIỀN TRONG CSS

## Thuộc tính `border` trong CSS được sử dụng để chỉ định kiểu, chiều rộng và màu sắc đường viền của một phần tử

### Thuộc tính `border-style` được sử dụng để tạo kiểu cho đường viền gồm những giá trị sau:
* Giá trị `solid`:  Xác định một đường viền bình thường -> `border-style: solid;`
* Giá trị `dotted`:  Xác định một đường viền chấm -> `border-style: dotted;`
* Giá trị `dashed`: Xác định một đường đứt nét -> `border-style: dashed;`
* Giá trị `double`: Xác định một đường viền kép/đôi -> `border-style: double;`
* Giá trị `none`: Đây là giá trị mặc định xác định không có đường viền nào -> `border-style: none;`
* Giá trị `hidden`: Xác định một đường viền ẩn -> `border-style: hidden;`
* Có thể chỉ định kiểu cho từng phía của đường viền: `border-style: top right bottom left;` -> `border-style: solid double none dashed;`
* Ngoài ra còn có thể chỉ định kiểu đường viền cho 1 trong 4 phía: `border-style-top / border-style-right / border-style-bottom / border-style-left`
### Thuộc tính `border-width` được sử dụng để xác định độ dày của đường viền
* Giá trị `border`: Xác định độ dày của đường viền ở cả 4 phía -> `border-width: 10px;`
* Giá trị `border`: Xác định độ dày của đường viền cho từng phía -> `border-width: top right bottom left;` -> `border-width: 10px 2px 5px 8px;`
* Ngoài ra còn có thể chỉ định độ  của đường viên cho 1 trong 4 phía: `border-width-top \ border-width-right \ border-width-bottom \ border-width-left`
### Thuộc tính `border-color` được sử dụng để xác định màu đường viền cho một phần tử:
* Giá trị `color`: Xác định màu của đường viền ở cả 4 phía -> `border-color: red / border-color: rgb(255,0,224);/...`
* Giá trị `color`: Xác định màu cho 4 phía của đường viền -> `border-color: top-color right-color bottom-color left-color;` -> `border-color: red blue green pink;`
* Ngoài ra còn có thể chỉ định màu viền cho 1 trong  4 phía: `border-color-top / border-color-left / border-color-rigth / border-color-bottom`

### Thu gọn CSS
#### Yêu cầu đặt ra hãy thiết lập CSS để tạo 1 đường viền có `độ dày 6px`, `kiểu đường viền là double` và màu đường viền là `màu xanh`
##### Cách thứ nhất - chưa thu gọn CSS
```
<html>
<head>
    <title>CSS-Border</title>
    <style>
       .element{
           border-width: 6px; <!-Độ dày 6px-->
           border-style: double; <!--Kiểu double-->
           border-color: blue; <!--Màu xanh-->
       }
    </style>
</head>
<body>
    <p class="element">Nguyen Huu Nhan</p>
</body>
</html>
```
#### Cách thứ hai - đã thu gọn CSS
```
<html>
<head>
    <title>CSS-Border</title>
    <style>
       .element{
           border: 6px double blue; <!-- Thu gọn CSS-Border gồm 3 giá trị lần lượt là `độ dày , kiểu , màu` -->
       }
    </style>
</head>
<body>
    <p class="element">Nguyen Huu Nhan</p>
</body>
</html>
```

<hr>

*References by W3SCHOOL*

*Made by Nguyen Huu Nhan*

