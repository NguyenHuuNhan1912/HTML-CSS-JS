# *BIẾN TRONG CSS LÀ GÌ ? CÁCH ĐỂ SỬ DỤNG BIẾN TRONG CSS*
## Tại sao phải sử dụng biến trong CSS ? Có rất nhiều lý do nhưng lý do hợp lý nhất đó chính là số lượng code lặp đi lặp lại quá nhiều lần và `biến CSS sinh ra` để khắc phục điều đó
* Giả sử chúng ta có 3 thẻ [ header, main, footer], màu nền của cả 3 thẻ là màu xanh nhưng chúng ta muốn đổi sang màu xám thì phải sửa thuộc tính `background` của cả 3 thẻ như thế thì quá bất tiện, nếu có 100 thẻ hay 1000 thẻ như thế thì sao chẳng lẽ phải sửa hết tất cả ->`quá mất thời gian` **biến trong CSS sẽ khắc phục điều đó**
* Khai báo và sử dụng biến trong CSS
  * Muốn sử dụng được biến ta cần 1 lớp giả `root` -> `:root{ --Tên biến: giá trị}` -> VD: `:root{ --Element-Color: red; }`
  * Để gọi biến ta cần hàm `var` -> `var(tên biến)` -> `var(--Element-Color);`
  * **Chú ý** phía trước `tên biến` phải có 2 dấu `--`
* Dưới đây là đoạn code đơn giản về biến trong CSS
```
<html>
<head>
    <title>CSS-Variable</title>
    <style>
    
        /* Khai báo biến sử dụng lớp giả*/
        :root{
            --element-color: blue;
        }

       header{ background-color: var(--element-color); }

       main{ background-color: var(--element-color); }

       footer{ background-color: var(--element-color); }

    </style> <!-- Khi muốn thay đổi nền thành màu xám thì chúng ta chỉ cần sửa giá trị của biến trên lớp giả là được không cần tác động đến thẻ hoặc lớp khác -->
    
</head>
<body>
    <header>Biến trong CSS</header>
    <main>Biến trong CSS</main>
    <main>Biến trong CSS</main>
</body>
</html>
```

<hr>

*Made by Nguyen Huu Nhan*
