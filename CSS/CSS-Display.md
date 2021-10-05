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
<img src="https://lh3.googleusercontent.com/tMfwXoOosb5N6hm03sxVZkjDtG9KDiem5wSDs57NKt-3WmeRTk1horGOLet3n20P8LVqss0TUf_tcucr9sooV9pneOvHa3YEk3dvg6ZhmYfg--Uzx3b0jfiFtbsoH3sM_nQlHze7guDLJsDNtukuFx6M92E0XnWefDJg0WcmjyMe_j_wfWQ6w4fE3Srtua9r7DUNBmCAcr7viovJdpn9j9nK61ANhJjEFPzrMeR1EreQe4cdp7I0V1ST0DvxvSfervW1MuO3k_rV83mv0yiiiuKmmKOXioiUKaS-t-yJ-fenujbZsJDJQHg-Cxq2ulCm8ZNsP6xU_loQRD3NKwfPA6Uns-FbHpWgmYmLsifxE2-fsfq0QjY5FswiGOEFe_W3fmRFt3tSs-OrllvaavVJB6Pbf8YF3IYZnsicv80aS5xFqyhspkF4um3o04lx7AekFLDLerUvP9AXY--pLTlLthfooWSKZVnn55GkPeE0B4FHSi24ntrOyR6j-8Xn6mE5jDZWK2gbU0Y50Xx4sH5Y0f5w9EK2fJcWVmdKV8_wkgj6pAumFVdN5QvqHOf-RqIAQ8BmuAfhwy1uvwNUSzSoaUhHWms2nDdYgFuMAyHe_uoHkcL9l2MMiRvKBIyUwu7R1lqPlTRJosziT5W99bkmh8ompVqSmAJBeJgpGvyuLbkjW7y8m9L7dFpflRiEDSIUmdGW7J9SEZwKzLqCJQ=w1280-h358-no?authuser=0">

## Hình ảnh *display: inline-block;*
<img src="https://lh3.googleusercontent.com/iq6opZvFqHK0d9nuAYmxsXsWsR778IvZJ4l3zSS6zBQsiWfyFeZnKBy0QCQ7Fan8_Xf8-XlOMBUyY9xr3FEmVvz9RiOcgk9PrIgae-rXQV_ue2oQBoAx8ZKzd3Y2IUXS5zfw-JnpRjkTeFxHcJWJVJHDmlNKLhM1688nY6FHXnaLsFBTKT4jo1Avj-R4MlB5a6Dg_y-qh_T11iBmVE-9k7Z2wffb6Mk22vmhuz4jlJRz3zI5muaT6iC56FaRXR7SGRmxal083NuV1afz2fKK5ta4Ia3dkgyPU2IItwUJgQ4TlW3jhdoHftEAcIDnZvmDGn_U1if95QqIReU5bpx5xAwE4LL6hwLrEHYGG8CtYDUXh6HdExYZaaQXfJkL0K8V8MEzxaTeeOqOp8KhCFfLej9EKifLy6wVucKj5XLRtg_E3OSK4GpSEDImx1x3YqV50cm19WJAiFOgFcy0-ANQYsJSWu9_LUZFCJTOzaGDLCirvI1tJnKXGikHCzps3u4QQejQ8sxWjK6krWbycZ5xz3-F7aJrytJc9sbEeDtF-3tdeJKxfLPOSvKLBMnkduGnM1XC8yMKGsRVf8UfXHp5aqA7jpW0N1sYqVx-TZyfIWoDUTqZoVoPFE4bHq6pGt7gd9nBBEA__G-LeUCaCqH7jjWjHZhGSdZPvc7-jn0tW69chqqi9JimRLsAShLgpcLho6p_CG6dO7pQ-I0Lug=w1133-h256-no?authuser=0">

**Made by Nguyen Huu Nhan**
