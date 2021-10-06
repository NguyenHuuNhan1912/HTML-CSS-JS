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
  <img src="https://lh3.googleusercontent.com/65ZqRHf-WMyVr-gNao31imuPWYDQNaI-YYGtkK8TXcCA6Rne1f72v7-zJFs20KxcD_Pzk63FQwenV29GSIvs6I-IuWWYXoSs2JFCgsZxdwVj9TIKYNC73r49Kao_W4B6aSeAD0h8Hp2ODbOSS6ycFB_u4OM7h_D6d-ST_ImwPfLv4X8TQMkwrwcWAyYl5pXta-eRtdfeXf7HfzHzbwhBhqBMbYT6pNEF0tJa-Bwc1-ycAuI0Zjta1QL9xljHcSSXOPK6ZriYqcjJDxfKqZEpzVhMbMQfwn_FbEDG_p5Ai-K41C8Jef59SdHmzCOxmRH8JGijEPEgK9GJFaRLicKVZwr9mFWlk20p0xCfjMmzFJTfub-Kvhxf2aHbTf04ppk-C9FHkD0pTbZmaGE9oUj9WDvIO8R3HmKIE3c4idKMSiePWJO1uiPb7ZdaQosIQIGNeZJPLlHpXr1GBUkeClq0PH9d95z49bHdHJpCzwaS1SLvSjxPul_agk2JpdXKPsBP9s_D8D9aym4GTmy1OnQDEMalrzF1Gv9CBcf7XoSXKQarn2i6_Yfj14nRmDZWi5OcXkiYlYJYPmXABmaPbs7MMBtChkwRt0mQLE8GgxWmuMtLci1P1_luHPgRHFfIYDMp-Sn2BuqaWc-Jz7GTv3f0WFEGymK-q6YOal2MYjR-2KLCYb_cZ_e8oI2DXPIbDcEzCWP93ebxcdxiEtMBNQ=w1358-h242-no?authuser=0">
  
  * Còn hình ảnh này `đã có sự khác biệt`, hình ảnh được `set max-width` `không bị tràn và vẫn giữ nguyên được chiều rộng ban đầu` trong khi thuộc tính `width` `đã bị tràn và chiều rộng cũng bị thay đổi`
  <img src="https://lh3.googleusercontent.com/QqyDERjDQAd228Dgdt6qD0Rdz-L2lokRZJWvZoB4RaAc6d_niJHeQYsADF2DmlNoGlacZHwA1C-4AXH978rx6AhUo0-1yimaiE0M1PLmR4J-h_IP4LaLlDbeeMJL3OrIj0cI-jB5z49-9u_ImL56bC4j0XSeGtSFMhQwP49661Z2MdnW9yK9dcVchN2E4lUNs8qQjoiZgZuvBSxUmUxLdEvY9XUCMqh8qLcgr4hWQ_l4TqVdfVDM9-PIkTALVj79CiEV1GAkmmiQjYLGCslHX39f2Y6EmfZzHd9KILCQ6BlYtetwKOfKsVeLI8dJPk-SJ_S1_atA04hEnFSxCkhbmG4MaDWCnTyjOXkQLk8rNC0cX4w6lWPhdbpQJIBt204LvbEvZC3sDo3vtBhGZUoD4k0NcjYIAqslicgwsozys_H718GuV_maUcns7BDK4ulB3AvuLQGbISO7nKIlM75D0DqcM0aTZPbxBHJG4HK-wUh4xguizKL59AAEd9q-tNsh_bwPfQx81f0Hsq54LQouJks72qTQQFgFF18WhfHi03VA3pQ8N0v2uKsJO5bOTZfUYzmeG7yhA_y0wbUnbIBYAtMY3CQrbbvqP0nTmPjxrZ5RtQBVaYjwBx5ObIxtsVT-wWcCC9HC1hVrXFyrE-jiXNqcIRy3TmmcZ-ns5j3zL6ZhiaRLOf4R3vqGzo2cYn85OwHelDm6EMd_EmAbzg=w1360-h329-no?authuser=0">
  
<hr>

Made by Nguyen Huu Nhan

