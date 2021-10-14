# NHỮNG CÁCH CSS TRONG MỘT TRANG WEB
## Trước khi tìm hiểu về độ ưu tiên trong CSS thì chúng ta sẽ nói về những cách để CSS cho một trang web
### Có 3 cách để CSS cho một trang web
* CSS-Internal: Còn được hiểu là CSS bên trong, CSS trực tiếp trên file HTML sử dụng thẻ ```<style>``` đặt bên trong thẻ ```<head>``` của HTML
* CSS-External: Còn được hiểu là CSS bên ngoài, chúng ta sẽ có một file .css riêng bên ngoài và hoàn toàn độc lập với file HTML, sử dụng thẻ ```<link>``` để truy cập file .css bên ngoài đó
* CSS-Inline: Còn được hiểu là CSS nội tuyến, chúng ta sẽ CSS bằng thẻ ```<style>``` trực tiếp bên trong phần tử của HTML -> ```<p style="color:white">CSS-Inline<p>```
## ĐỘ ƯU TIÊN TRONG CSS
```
1. External, internal
2. Inline - 1000
3. Id - 100
4. Class - 10
5. Tag - 1
6. Equal specificity
7. Universal selector and inherited
```
## Ta xét Internal và External
### Giữa hai loại này không có thứ tự ưu tiên mà là thẻ nào gọi trước thì được sử dụng trước thẻ nào gọi sau sẽ đè lên thẻ trước đó
#### Ta có HTML và CSS đơn giản như sau
<img src="https://github.com/NguyenHuuNhan1912/HTML-CSS-JS/blob/main/Images/Priority-01.png">

#### Như chúng ta thấy Internal là thẻ ```<style>``` được đặt sau thẻ ```<link> - External``` thì chữ của đoạn văn sẽ có màu xanh

<img src="https://github.com/NguyenHuuNhan1912/HTML-CSS-JS/blob/main/Images/Priority-02.png">

#### Nếu chúng ta đưa thẻ ```<style>``` lên trên thì chữ của đoạn văn sẽ là màu đỏ chứ không còn là màu xanh nữa 
