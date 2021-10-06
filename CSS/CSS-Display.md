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
<img src="https://lh3.googleusercontent.com/CDiKHN4uxAguFTL8I2S993Wo0EGw69KZ3YKs0oX5F-BaSoCB-E-LxXEHZSdVtijUmjGn4ZN9-nOo6MaacMd33ls-mSNHLKff3MsoJZEPPLtqGm8BZjqxA4wMwM4UMEZnOqYqQNmPjP63jUKxg6Qb0rSr9jYlJT6mrVCoh_MWyrHMa5ewUTG6bH0X4pwMEa3GEPk9r1-NAjfhDWeW-aGyQHw1xVY3wrxM5RyQXWJcw17r7mTQ6JG3y7MQl9L4jLACRGlhIQk6CVa3C4fICQjlmCvA6c44_0sVWVjFkC7oKoSnN-Ctj-QD-KSc_npRoxhzAgXmJJABdACj8vhr7JJ9qjtsyVHkaP5VZqWK8vbS4DOvPEgyXK6NKnMihVWzXf4wU40x7-sJw5ZBVqBdX0LMEvT-SJ3imJF4LzN_OVhUsMgio0_hNElrYUagDYYgyfPtIzGAzh3lrEBxbbH5YoENvFTuVQn_1VHWqBz8wg_eWnq4p4DwYefam71CtmsQDXYhYdFAGXdREJWxQ4HERe2wbSbJkhk-mMs5sGj1mh_4n8HwHrJINHn99v889Gol7qoGlw3q1Sn2edudCt_awR-BXxd6T4C3RvixoyWlH4mMFn6AzPwLnXU-SmWAjFS7CPaKMd6QlaayBHje18kUTQTJyAPm1MSi7lIj03jYr-vPHGWCCOINn3AjusqfKGuu-Ko1Y3hLhGNPW4dzTV7-XQ=w1280-h358-no?authuser=0">

## Hình ảnh *display: inline-block;*

<img src="https://lh3.googleusercontent.com/oUUyAG_uWz9qJY7NORspDv_sYaEgeL8kC7DuBx0pEC8lhzWDOZ-bM6kTaHcFqV49VteiNj0D05FGR0J_o4InDGsE7-zE0--jogQjka-LhwIkjZanH0V8dnGDCR8SN71Yy8PxxUnbDqYv7uiwqE5OOCrLHYLjudlduRb11l7KcJmFn-EIHTGRfOjOta5pmJli_FrVD2GUdhTZquGVAbTjaAd7R_ZCfdnmPCUFfjGfzjsEtLrFb4DfMsRnqHhlIyT4F-Yb2GuFPwdUgfdyXrk-ZFLmczekqr5rW-cHwhbuJh50Yz90rVX4Zg1WU3t2fa6Wkil6Hb0Z7ZqWeQ4noHZdE5M28ePmkX6qAl85KF7LYhaWXftFkIqmH7qC-hlgmH6Z6EJx7GGkdadD-vdenp7obOEssLaWVS7nRZD9eCguDJ-yOqa6TDI5w78-j1Z3KeMueAIJdbfIW0aaa3LnOrqcVIDOFyP-YIAHFB6tubSmMbXoUCOp5t9Rd1zoTXtys56uGk4cYhkyOtBIF2nZ2rmHIhvUMphxNQdZrHCfhtjOJuZBt-eWT7gV6G4EJndiugYq_tGeXVtAb28n7zYZTsfwuOE9LRvyJmu1LVnzMUJJ06MbPVTGZKuIMwF58Y7o8fpHyiGL8BEaRIdbwpgw2bjAd8qjtzib5_naeBD3it6IdWZbiYE3MK8HBtSxhLiv978XN0Gwce1cte9XL1lQvQ=w1133-h256-no?authuser=0">

<hr>

*References by W3SCHOOL*

*Made by Nguyen Huu Nhan*
