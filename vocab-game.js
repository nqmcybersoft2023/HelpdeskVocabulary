// ==========================================
// 1. DỮ LIỆU TỪ VỰNG (VOCABULARY DATA)
// ==========================================
const vocabulary = [
  {en: "troubleshoot", vi: "xử lý sự cố"}, 
  {en: "issue", vi: "sự cố"}, 
  {en: "incident", vi: "sự cố hệ thống"}, 
  {en: "error", vi: "lỗi"}, 
  {en: "bug", vi: "lỗi phần mềm"}, 
  {en: "failure", vi: "hỏng"}, 
  {en: "malfunction", vi: "trục trặc"}, 
  {en: "diagnose", vi: "chẩn đoán"}, 
  {en: "resolve", vi: "giải quyết"}, 
  {en: "fix", vi: "sửa"}, 
  {en: "repair", vi: "sửa chữa"}, 
  {en: "investigate", vi: "điều tra"}, 
  {en: "test", vi: "kiểm tra"}, 
  {en: "check", vi: "kiểm tra"}, 
  {en: "confirm", vi: "xác nhận"}, 
  {en: "verify", vi: "xác minh"}, 
  {en: "monitor", vi: "giám sát"}, 
  {en: "detect", vi: "phát hiện"}, 
  {en: "identify", vi: "xác định"}, 
  {en: "analyze", vi: "phân tích"}, 
  {en: "root cause", vi: "nguyên nhân gốc"}, 
  {en: "temporary fix", vi: "sửa tạm"}, 
  {en: "permanent fix", vi: "sửa vĩnh viễn"}, 
  {en: "workaround", vi: "giải pháp tạm"}, 
  {en: "patch", vi: "bản vá"}, 
  {en: "update", vi: "cập nhật"}, 
  {en: "upgrade", vi: "nâng cấp"}, 
  {en: "install", vi: "cài đặt"}, 
  {en: "reinstall", vi: "cài lại"}, 
  {en: "configure", vi: "cấu hình"}, 
  {en: "setup", vi: "thiết lập"}, 
  {en: "restart", vi: "khởi động lại"}, 
  {en: "reboot", vi: "khởi động lại"}, 
  {en: "shutdown", vi: "tắt máy"}, 
  {en: "power cycle", vi: "tắt bật nguồn"}, 
  {en: "connect", vi: "kết nối"}, 
  {en: "disconnect", vi: "ngắt kết nối"}, 
  {en: "response time", vi: "thời gian phản hồi"}, 
  {en: "downtime", vi: "thời gian ngừng hệ thống"}, 
  {en: "outage", vi: "sự cố hệ thống"}, 
  {en: "latency", vi: "độ trễ"}, 
  {en: "bandwidth", vi: "băng thông"}, 
  {en: "network issue", vi: "lỗi mạng"}, 
  {en: "connection problem", vi: "lỗi kết nối"}, 
  {en: "slow performance", vi: "hệ thống chậm"}, 
  {en: "system crash", vi: "sập hệ thống"}, 
  {en: "server error", vi: "lỗi máy chủ"}, 
  {en: "login problem", vi: "lỗi đăng nhập"}, 
  {en: "authentication", vi: "xác thực"}, 
  {en: "authorization", vi: "phân quyền"}, 
  {en: "permission", vi: "quyền truy cập"}, 
  {en: "ticket", vi: "phiếu hỗ trợ"}, 
  {en: "ticket ID", vi: "mã ticket"}, 
  {en: "ticket queue", vi: "hàng đợi ticket"}, 
  {en: "ticket status", vi: "trạng thái ticket"}, 
  {en: "open ticket", vi: "ticket mở"}, 
  {en: "closed ticket", vi: "ticket đã đóng"}, 
  {en: "pending ticket", vi: "ticket chờ"}, 
  {en: "assigned", vi: "được giao"}, 
  {en: "escalate", vi: "chuyển cấp"}, 
  {en: "escalation", vi: "chuyển cấp hỗ trợ"}, 
  {en: "priority", vi: "mức ưu tiên"}, 
  {en: "high priority", vi: "ưu tiên cao"}, 
  {en: "low priority", vi: "ưu tiên thấp"}, 
  {en: "urgent", vi: "khẩn cấp"}, 
  {en: "service request", vi: "yêu cầu dịch vụ"}, 
  {en: "incident ticket", vi: "ticket sự cố"}, 
  {en: "request ticket", vi: "ticket yêu cầu"}, 
  {en: "support request", vi: "yêu cầu hỗ trợ"}, 
  {en: "support team", vi: "đội hỗ trợ"}, 
  {en: "helpdesk", vi: "trung tâm hỗ trợ"}, 
  {en: "IT support", vi: "hỗ trợ IT"}, 
  {en: "service desk", vi: "bàn dịch vụ"}, 
  {en: "knowledge base", vi: "kho kiến thức"}, 
  {en: "documentation", vi: "tài liệu"}, 
  {en: "troubleshooting guide", vi: "hướng dẫn sửa lỗi"}, 
  {en: "ticket resolution", vi: "giải quyết ticket"}, 
  {en: "ticket history", vi: "lịch sử ticket"}, 
  {en: "ticket comment", vi: "bình luận ticket"}, 
  {en: "ticket update", vi: "cập nhật ticket"}, 
  {en: "ticket log", vi: "nhật ký ticket"}, 
  {en: "ticket assignment", vi: "phân công ticket"}, 
  {en: "SLA", vi: "cam kết dịch vụ"}, 
  {en: "response SLA", vi: "SLA phản hồi"}, 
  {en: "resolution SLA", vi: "SLA xử lý"}, 
  {en: "remote access", vi: "truy cập từ xa"}, 
  {en: "remote desktop", vi: "màn hình từ xa"}, 
  {en: "remote session", vi: "phiên remote"}, 
  {en: "screen sharing", vi: "chia sẻ màn hình"}, 
  {en: "control", vi: "điều khiển"}, 
  {en: "take control", vi: "điều khiển máy"}, 
  {en: "remote login", vi: "đăng nhập từ xa"}, 
  {en: "remote connection", vi: "kết nối từ xa"}, 
  {en: "support tool", vi: "công cụ hỗ trợ"}, 
  {en: "VPN", vi: "mạng riêng ảo"}, 
  {en: "secure connection", vi: "kết nối bảo mật"}, 
  {en: "login credentials", vi: "thông tin đăng nhập"}, 
  {en: "username", vi: "tên đăng nhập"}, 
  {en: "password", vi: "mật khẩu"}, 
  {en: "two factor authentication", vi: "xác thực 2 lớp"}, 
  {en: "session timeout", vi: "hết thời gian phiên"}, 
  {en: "disconnect session", vi: "ngắt phiên"}, 
  {en: "reconnect", vi: "kết nối lại"}, 
  {en: "remote troubleshooting", vi: "sửa lỗi từ xa"}, 
  {en: "remote diagnostics", vi: "chẩn đoán từ xa"}, 
  {en: "file transfer", vi: "chuyển file"}, 
  {en: "download", vi: "tải xuống"}, 
  {en: "upload", vi: "tải lên"}, 
  {en: "install remotely", vi: "cài từ xa"}, 
  {en: "update remotely", vi: "cập nhật từ xa"}, 
  {en: "command line", vi: "dòng lệnh"}, 
  {en: "terminal", vi: "terminal"}, 
  {en: "administrator access", vi: "quyền admin"}, 
  {en: "system access", vi: "truy cập hệ thống"}, 
  {en: "customer", vi: "khách hàng"}, 
  {en: "client", vi: "khách"}, 
  {en: "user", vi: "người dùng"}, 
  {en: "end user", vi: "người dùng cuối"}, 
  {en: "support agent", vi: "nhân viên hỗ trợ"}, 
  {en: "support engineer", vi: "kỹ sư hỗ trợ"}, 
  {en: "technical support", vi: "hỗ trợ kỹ thuật"}, 
  {en: "customer service", vi: "dịch vụ khách hàng"}, 
  {en: "customer request", vi: "yêu cầu khách"}, 
  {en: "customer issue", vi: "vấn đề khách"}, 
  {en: "customer feedback", vi: "phản hồi khách"}, 
  {en: "customer satisfaction", vi: "hài lòng khách"}, 
  {en: "communication", vi: "giao tiếp"}, 
  {en: "explain", vi: "giải thích"}, 
  {en: "clarify", vi: "làm rõ"}, 
  {en: "guide", vi: "hướng dẫn"}, 
  {en: "assist", vi: "hỗ trợ"}, 
  {en: "inform", vi: "thông báo"}, 
  {en: "notify", vi: "thông báo"}, 
  {en: "follow up", vi: "theo dõi"}, 
  {en: "respond", vi: "phản hồi"}, 
  {en: "reply", vi: "trả lời"}, 
  {en: "acknowledge", vi: "ghi nhận"}, 
  {en: "apologize", vi: "xin lỗi"}, 
  {en: "appreciate", vi: "cảm ơn"}, 
  {en: "please wait", vi: "vui lòng chờ"}, 
  {en: "please check", vi: "vui lòng kiểm tra"}, 
  {en: "let me check", vi: "để tôi kiểm tra"}, 
  {en: "router", vi: "bộ định tuyến"}, 
  {en: "modem", vi: "modem"}, 
  {en: "switch", vi: "switch"}, 
  {en: "access point", vi: "điểm truy cập"}, 
  {en: "network", vi: "mạng"}, 
  {en: "LAN", vi: "mạng nội bộ"}, 
  {en: "WAN", vi: "mạng diện rộng"}, 
  {en: "IP address", vi: "địa chỉ IP"}, 
  {en: "static IP", vi: "IP tĩnh"}, 
  {en: "dynamic IP", vi: "IP động"}, 
  {en: "DHCP", vi: "cấp IP tự động"}, 
  {en: "DNS", vi: "phân giải tên"}, 
  {en: "gateway", vi: "cổng mạng"}, 
  {en: "subnet", vi: "mạng con"}, 
  {en: "MAC address", vi: "địa chỉ MAC"}, 
  {en: "ethernet", vi: "mạng dây"}, 
  {en: "WiFi", vi: "wifi"}, 
  {en: "packet", vi: "gói tin"}, 
  {en: "packet loss", vi: "mất gói"}, 
  {en: "ping", vi: "kiểm tra kết nối"}, 
  {en: "traceroute", vi: "truy vết đường mạng"}, 
  {en: "port", vi: "cổng mạng"}, 
  {en: "open port", vi: "mở cổng"}, 
  {en: "firewall", vi: "tường lửa"}, 
  {en: "network cable", vi: "cáp mạng"}, 
  {en: "RJ45", vi: "đầu cáp mạng"}, 
  {en: "internet connection", vi: "kết nối internet"},
  {en: "motherboard", vi: "bo mạch chủ"},
  {en: "processor", vi: "bộ vi xử lý"},
  {en: "memory", vi: "bộ nhớ (RAM)"},
  {en: "hard drive", vi: "ổ cứng (HDD)"},
  {en: "solid state drive", vi: "ổ cứng thể rắn (SSD)"},
  {en: "power supply", vi: "bộ nguồn"},
  {en: "graphics card", vi: "card đồ họa"},
  {en: "cooling fan", vi: "quạt tản nhiệt"},
  {en: "heat sink", vi: "khối tản nhiệt"},
  {en: "chassis", vi: "vỏ máy (case)"},
  {en: "peripheral", vi: "thiết bị ngoại vi"},
  {en: "keyboard", vi: "bàn phím"},
  {en: "mouse", vi: "chuột"},
  {en: "monitor", vi: "màn hình"},
  {en: "projector", vi: "máy chiếu"},
  {en: "docking station", vi: "trạm cắm kết nối"},
  {en: "UPS", vi: "bộ lưu điện"},
  {en: "surge protector", vi: "bộ chống sốc điện"},
  {en: "adapter", vi: "bộ chuyển đổi"},
  {en: "flash drive", vi: "ổ USB flash"},
  {en: "external hard drive", vi: "ổ cứng ngoài"},
  {en: "optical drive", vi: "ổ đĩa quang"},
  {en: "webcam", vi: "camera mạng"},
  {en: "microphone", vi: "micro"},
  {en: "speaker", vi: "loa"},
  {en: "headset", vi: "tai nghe có mic"},
  {en: "barcode scanner", vi: "máy quét mã vạch"},
  {en: "touchpad", vi: "bàn di chuột"},
  {en: "touch screen", vi: "màn hình cảm ứng"},
  {en: "stylus", vi: "bút cảm ứng"},
  {en: "motherboard battery", vi: "pin CMOS"},
  {en: "expansion slot", vi: "khe cắm mở rộng"},
  {en: "USB port", vi: "cổng USB"},
  {en: "HDMI", vi: "cổng HDMI"},
  {en: "audio jack", vi: "giắc cắm âm thanh"},
  {en: "power cable", vi: "cáp nguồn"},
  {en: "data cable", vi: "cáp dữ liệu"},
  {en: "hardware failure", vi: "lỗi phần cứng"},
  {en: "replace", vi: "thay thế"},
  {en: "assemble", vi: "lắp ráp"},
  {en: "disassemble", vi: "tháo rời"},
  {en: "upgrade RAM", vi: "nâng cấp RAM"},
  {en: "replace hard drive", vi: "thay ổ cứng"},
  {en: "clean dust", vi: "vệ sinh bụi"},
  {en: "operating system", vi: "hệ điều hành"},
  {en: "application", vi: "ứng dụng"},
  {en: "software", vi: "phần mềm"},
  {en: "driver", vi: "trình điều khiển thiết bị"},
  {en: "firmware", vi: "phần mềm cơ sở"},
  {en: "registry", vi: "sổ đăng ký hệ thống"},
  {en: "task manager", vi: "trình quản lý tác vụ"},
  {en: "control panel", vi: "bảng điều khiển"},
  {en: "command prompt", vi: "dấu nhắc lệnh"},
  {en: "GUI", vi: "giao diện đồ họa người dùng"},
  {en: "file system", vi: "hệ thống tập tin"},
  {en: "directory", vi: "thư mục"},
  {en: "folder", vi: "thư mục"},
  {en: "file", vi: "tập tin"},
  {en: "shortcut", vi: "lối tắt"},
  {en: "file extension", vi: "định dạng tệp"},
  {en: "executable file", vi: "tệp thực thi"},
  {en: "background process", vi: "tiến trình chạy ngầm"},
  {en: "service", vi: "dịch vụ hệ thống"},
  {en: "compatibility", vi: "tính tương thích"},
  {en: "crash", vi: "treo máy"},
  {en: "freeze", vi: "đơ máy"},
  {en: "blue screen of death", vi: "màn hình xanh chết chóc (BSOD)"},
  {en: "error message", vi: "thông báo lỗi"},
  {en: "error code", vi: "mã lỗi"},
  {en: "log file", vi: "tệp nhật ký"},
  {en: "event viewer", vi: "trình xem sự kiện"},
  {en: "safe mode", vi: "chế độ an toàn"},
  {en: "system restore", vi: "khôi phục hệ thống"},
  {en: "backup", vi: "sao lưu"},
  {en: "recovery", vi: "phục hồi"},
  {en: "disk cleanup", vi: "dọn dẹp ổ đĩa"},
  {en: "defragmentation", vi: "chống phân mảnh"},
  {en: "format", vi: "định dạng (ổ đĩa)"},
  {en: "partition", vi: "phân vùng"},
  {en: "boot", vi: "khởi động"},
  {en: "boot sequence", vi: "thứ tự khởi động"},
  {en: "BIOS", vi: "hệ thống nhập/xuất cơ bản"},
  {en: "update OS", vi: "cập nhật hệ điều hành"},
  {en: "install software", vi: "cài đặt phần mềm"},
  {en: "uninstall", vi: "gỡ cài đặt"},
  {en: "license", vi: "giấy phép"},
  {en: "product key", vi: "khóa sản phẩm"},
  {en: "activation", vi: "kích hoạt"},
  {en: "trial version", vi: "bản dùng thử"},
  {en: "freeware", vi: "phần mềm miễn phí"},
  {en: "open source", vi: "mã nguồn mở"},
  {en: "bug fix", vi: "sửa lỗi phần mềm"},
  {en: "cybersecurity", vi: "an ninh mạng"},
  {en: "malware", vi: "phần mềm độc hại"},
  {en: "virus", vi: "vi-rút"},
  {en: "trojan", vi: "mã độc trojan"},
  {en: "worm", vi: "sâu máy tính"},
  {en: "spyware", vi: "phần mềm gián điệp"},
  {en: "ransomware", vi: "mã độc tống tiền"},
  {en: "adware", vi: "phần mềm quảng cáo"},
  {en: "phishing", vi: "tấn công lừa đảo"},
  {en: "spam", vi: "thư rác"},
  {en: "breach", vi: "vi phạm dữ liệu"},
  {en: "vulnerability", vi: "lỗ hổng bảo mật"},
  {en: "exploit", vi: "khai thác lỗ hổng"},
  {en: "encryption", vi: "mã hóa"},
  {en: "decryption", vi: "giải mã"},
  {en: "public key", vi: "khóa công khai"},
  {en: "private key", vi: "khóa bí mật"},
  {en: "digital signature", vi: "chữ ký số"},
  {en: "certificate", vi: "chứng chỉ bảo mật"},
  {en: "antivirus", vi: "phần mềm diệt virus"},
  {en: "scan", vi: "quét"},
  {en: "quarantine", vi: "cách ly (mã độc)"},
  {en: "remove threat", vi: "loại bỏ mối đe dọa"},
  {en: "firewall rules", vi: "quy tắc tường lửa"},
  {en: "block", vi: "chặn"},
  {en: "allow", vi: "cho phép"},
  {en: "biometric", vi: "sinh trắc học"},
  {en: "fingerprint", vi: "vân tay"},
  {en: "facial recognition", vi: "nhận diện khuôn mặt"},
  {en: "multi-factor authentication", vi: "xác thực đa yếu tố (MFA)"},
  {en: "single sign-on", vi: "đăng nhập một lần (SSO)"},
  {en: "active directory", vi: "thư mục hoạt động (AD)"},
  {en: "domain controller", vi: "máy chủ quản lý vùng"},
  {en: "group policy", vi: "chính sách nhóm (GPO)"},
  {en: "user account", vi: "tài khoản người dùng"},
  {en: "admin account", vi: "tài khoản quản trị"},
  {en: "guest account", vi: "tài khoản khách"},
  {en: "create account", vi: "tạo tài khoản"},
  {en: "disable account", vi: "vô hiệu hóa tài khoản"},
  {en: "enable account", vi: "kích hoạt tài khoản"},
  {en: "delete account", vi: "xóa tài khoản"},
  {en: "reset password", vi: "đặt lại mật khẩu"},
  {en: "unlock account", vi: "mở khóa tài khoản"},
  {en: "lock out", vi: "khóa (do nhập sai MK)"},
  {en: "password expiry", vi: "mật khẩu hết hạn"},
  {en: "password policy", vi: "chính sách mật khẩu"},
  {en: "strong password", vi: "mật khẩu mạnh"},
  {en: "credential", vi: "thông tin xác thực"},
  {en: "identity", vi: "danh tính"},
  {en: "cloud computing", vi: "điện toán đám mây"},
  {en: "cloud storage", vi: "lưu trữ đám mây"},
  {en: "virtual machine", vi: "máy ảo (VM)"},
  {en: "hypervisor", vi: "trình quản lý máy ảo"},
  {en: "host", vi: "máy chủ vật lý"},
  {en: "guest OS", vi: "hệ điều hành khách"},
  {en: "snapshot", vi: "bản ghi trạng thái (máy ảo)"},
  {en: "clone", vi: "nhân bản"},
  {en: "container", vi: "bộ chứa (container)"},
  {en: "cluster", vi: "cụm máy chủ"},
  {en: "node", vi: "nút mạng"},
  {en: "load balancer", vi: "bộ cân bằng tải"},
  {en: "proxy server", vi: "máy chủ ủy quyền"},
  {en: "cache", vi: "bộ nhớ đệm"},
  {en: "clear cache", vi: "xóa bộ nhớ đệm"},
  {en: "cookie", vi: "tệp cookie"},
  {en: "session", vi: "phiên làm việc"},
  {en: "timeout", vi: "hết thời gian kết nối"},
  {en: "intranet", vi: "mạng nội bộ doanh nghiệp"},
  {en: "topology", vi: "sơ đồ mạng"},
  {en: "routing", vi: "định tuyến"},
  {en: "switching", vi: "chuyển mạch"},
  {en: "broadcast", vi: "quảng bá (mạng)"},
  {en: "VLAN", vi: "mạng LAN ảo"},
  {en: "subnet mask", vi: "mặt nạ mạng con"},
  {en: "default gateway", vi: "cổng mặc định"},
  {en: "DNS record", vi: "bản ghi DNS"},
  {en: "throughput", vi: "thông lượng mạng"},
  {en: "jitter", vi: "độ giật (mạng)"},
  {en: "bottleneck", vi: "nút thắt cổ chai"},
  {en: "redundancy", vi: "tính dự phòng"},
  {en: "failover", vi: "chuyển đổi dự phòng"},
  {en: "high availability", vi: "tính sẵn sàng cao"},
  {en: "disaster recovery", vi: "phục hồi sau thảm họa"},
  {en: "backup server", vi: "máy chủ sao lưu"},
  {en: "sync", vi: "đồng bộ hóa"},
  {en: "upload speed", vi: "tốc độ tải lên"},
  {en: "download speed", vi: "tốc độ tải xuống"},
  {en: "ISP", vi: "nhà cung cấp dịch vụ internet"},
  {en: "database", vi: "cơ sở dữ liệu"},
  {en: "table", vi: "bảng dữ liệu"},
  {en: "row", vi: "hàng"},
  {en: "column", vi: "cột"},
  {en: "record", vi: "bản ghi"},
  {en: "query", vi: "truy vấn"},
  {en: "SQL", vi: "ngôn ngữ truy vấn có cấu trúc"},
  {en: "primary key", vi: "khóa chính"},
  {en: "foreign key", vi: "khóa ngoại"},
  {en: "index", vi: "chỉ mục"},
  {en: "export data", vi: "xuất dữ liệu"},
  {en: "import data", vi: "nhập dữ liệu"},
  {en: "migration", vi: "di chuyển dữ liệu"},
  {en: "web browser", vi: "trình duyệt web"},
  {en: "URL", vi: "địa chỉ web"},
  {en: "domain name", vi: "tên miền"},
  {en: "hosting", vi: "lưu trữ web"},
  {en: "SSL certificate", vi: "chứng chỉ SSL"},
  {en: "bookmark", vi: "dấu trang"},
  {en: "homepage", vi: "trang chủ"},
  {en: "refresh", vi: "tải lại trang"},
  {en: "extension", vi: "tiện ích mở rộng"},
  {en: "incognito mode", vi: "chế độ ẩn danh"},
  {en: "email server", vi: "máy chủ thư điện tử"},
  {en: "inbox", vi: "hộp thư đến"},
  {en: "outbox", vi: "hộp thư đi"},
  {en: "sent items", vi: "thư đã gửi"},
  {en: "draft", vi: "thư nháp"},
  {en: "trash", vi: "thùng rác"},
  {en: "attachment", vi: "tệp đính kèm"},
  {en: "forward", vi: "chuyển tiếp"},
  {en: "reply all", vi: "trả lời tất cả"},
  {en: "BCC", vi: "đồng kính gửi ẩn"},
  {en: "CC", vi: "đồng kính gửi"},
  {en: "email signature", vi: "chữ ký email"},
  {en: "auto-reply", vi: "trả lời tự động"},
  {en: "out of office", vi: "thông báo vắng mặt"},
  {en: "distribution list", vi: "danh sách phân phối"},
  {en: "shared mailbox", vi: "hộp thư dùng chung"},
  {en: "calendar", vi: "lịch"},
  {en: "schedule meeting", vi: "lên lịch họp"},
  {en: "meeting invite", vi: "lời mời họp"},
  {en: "video conference", vi: "hội nghị trực tuyến"},
  {en: "mute", vi: "tắt tiếng"},
  {en: "unmute", vi: "bật tiếng"},
  {en: "escalation matrix", vi: "ma trận chuyển cấp (leo thang)"},
  {en: "SLA breach", vi: "vi phạm cam kết dịch vụ"},
  {en: "first call resolution", vi: "giải quyết trong cuộc gọi đầu (FCR)"},
  {en: "ticketing tool", vi: "công cụ quản lý phiếu hỗ trợ"},
  {en: "ITSM", vi: "quản lý dịch vụ CNTT"},
  {en: "change management", vi: "quản lý sự thay đổi"},
  {en: "problem management", vi: "quản lý vấn đề"},
  {en: "incident management", vi: "quản lý sự cố"},
  {en: "asset management", vi: "quản lý tài sản"},
  {en: "hardware inventory", vi: "kiểm kê phần cứng"},
  {en: "software inventory", vi: "kiểm kê phần mềm"},
  {en: "lifecycle", vi: "vòng đời"},
  {en: "procurement", vi: "mua sắm thiết bị"},
  {en: "deploy", vi: "triển khai"},
  {en: "provision", vi: "cấp phát tài nguyên"},
  {en: "deprovision", vi: "thu hồi tài nguyên"},
  {en: "onboard", vi: "tiếp nhận nhân sự mới (cấp IT)"},
  {en: "offboard", vi: "thủ tục nghỉ việc (thu hồi IT)"},
  {en: "knowledge transfer", vi: "truyền đạt kiến thức"},
  {en: "SOP", vi: "quy trình thao tác chuẩn"},
  {en: "root cause analysis", vi: "phân tích nguyên nhân gốc (RCA)"},
  {en: "downtime announcement", vi: "thông báo thời gian bảo trì"},
  {en: "maintenance window", vi: "khung giờ bảo trì"},
  {en: "shift", vi: "ca làm việc"},
  {en: "handover", vi: "bàn giao"},
  {en: "empathy", vi: "sự đồng cảm"},
  {en: "active listening", vi: "lắng nghe tích cực"},
  {en: "problem solving", vi: "giải quyết vấn đề"},
  {en: "teamwork", vi: "làm việc nhóm"},
  {en: "remote work", vi: "làm việc từ xa"},
  {en: "endpoint", vi: "thiết bị đầu cuối"},
  {en: "MDM", vi: "quản lý thiết bị di động"},
  {en: "BYOD", vi: "mang thiết bị cá nhân (Bring Your Own Device)"},
  {en: "warranty", vi: "bảo hành"},
  {en: "vendor", vi: "nhà cung cấp"},
  {en: "third-party", vi: "bên thứ ba"},
  {en: "contract", vi: "hợp đồng"},
  {en: "license agreement", vi: "thỏa thuận cấp phép"},
  {en: "NDA", vi: "thỏa thuận bảo mật"},
  {en: "compliance", vi: "tuân thủ"},
  {en: "audit", vi: "kiểm toán"},
  {en: "workflow", vi: "luồng công việc"},
  {en: "dashboard", vi: "bảng điều khiển tổng quan"},
  {en: "script", vi: "tập lệnh"},
  {en: "automation", vi: "tự động hóa"},
  {en: "batch file", vi: "tệp thực thi hàng loạt"},
  {en: "command", vi: "lệnh"},
  {en: "syntax", vi: "cú pháp"},
  {en: "parameter", vi: "tham số"},
  {en: "variable", vi: "biến số"},
  {en: "debug", vi: "gỡ lỗi"},
  {en: "compile", vi: "biên dịch"},
  {en: "source code", vi: "mã nguồn"},
  {en: "repository", vi: "kho lưu trữ mã"},
  {en: "version control", vi: "kiểm soát phiên bản"},
  {en: "API", vi: "giao diện lập trình ứng dụng"},
  {en: "environment variable", vi: "biến môi trường"},
  {en: "path", vi: "đường dẫn"},
  {en: "read permission", vi: "quyền đọc"},
  {en: "write permission", vi: "quyền ghi"},
  {en: "execute permission", vi: "quyền thực thi"},
  {en: "ownership", vi: "quyền sở hữu"},
  {en: "compress", vi: "nén tệp"},
  {en: "extract", vi: "giải nén"},
  {en: "zip file", vi: "tệp zip"},
  {en: "ISO image", vi: "tệp ảnh ISO (đĩa ảo)"},
  {en: "mount", vi: "gắn ổ đĩa"},
  {en: "unmount", vi: "tháo ổ đĩa"},
  {en: "disk usage", vi: "dung lượng đĩa sử dụng"},
  {en: "quota", vi: "hạn mức"},
  {en: "bandwidth test", vi: "kiểm tra băng thông"},
  {en: "speed test", vi: "kiểm tra tốc độ"},
  {en: "diagnostic tool", vi: "công cụ chẩn đoán"},
  {en: "benchmark", vi: "chấm điểm chuẩn phần cứng"},
  {en: "stress test", vi: "kiểm tra khả năng chịu tải"},
  {en: "overclock", vi: "ép xung"},
  {en: "temperature sensor", vi: "cảm biến nhiệt"},
  {en: "short circuit", vi: "chập mạch"}
];

// ==========================================
// 2. LOGIC TÌM KIẾM TỪ ĐIỂN
// ==========================================
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
        const keyword = this.value.toLowerCase().trim();
        searchResults.innerHTML = ''; // Xóa kết quả cũ

        if (keyword === '') return;

        // Tìm kiếm cả tiếng Anh và tiếng Việt
        const filteredWords = vocabulary.filter(word => 
            word.en.toLowerCase().includes(keyword) || 
            word.vi.toLowerCase().includes(keyword)
        );

        if (filteredWords.length > 0) {
            filteredWords.forEach(word => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `<span><strong>${word.en}</strong></span> <span>${word.vi}</span>`;
                searchResults.appendChild(div);
            });
        } else {
            searchResults.innerHTML = `<div class="search-item" style="color:#7f8c8d; justify-content:center;">Không tìm thấy từ vựng.</div>`;
        }
    });

    // Xóa kết quả tìm kiếm khi click ra ngoài
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.innerHTML = '';
        }
    });
}

// ==========================================
// 3. LOGIC GAME GHÉP TỪ (ĐÃ TỐI ƯU)
// ==========================================
const PAIRS_PER_LESSON = 10;
let lesson = 0;
let score = 0;
let matched = 0;
let selectedCard = null;
let isProcessing = false; // Biến khóa bàn chơi chống click liên tục

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function loadLesson() {
    matched = 0;
    let start = lesson * PAIRS_PER_LESSON;
    let words = vocabulary.slice(start, start + PAIRS_PER_LESSON);

    renderBoard(words);
    document.getElementById("lesson").innerText = lesson + 1;
}

function renderBoard(words) {
    let viColumn = document.getElementById("viColumn");
    let enColumn = document.getElementById("enColumn");

    viColumn.innerHTML = "";
    enColumn.innerHTML = "";

    let viList = shuffle([...words]);
    let enList = shuffle([...words]);

    viList.forEach(v => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerText = v.vi;
        card.dataset.match = v.en;
        card.dataset.lang = "vi";
        viColumn.appendChild(card);
    });

    enList.forEach(v => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerText = v.en;
        card.dataset.match = v.vi;
        card.dataset.lang = "en";
        enColumn.appendChild(card);
    });

    addEvents();
}

function addEvents() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            // Nếu thẻ đã ghép đúng hoặc bàn chơi đang bị khóa thì bỏ qua
            if (card.classList.contains("correct") || isProcessing) return;

            // Đọc thẻ, truyền thêm ngôn ngữ để đọc đúng accent
            speak(card.innerText, card.dataset.lang);

            // Nếu chưa chọn thẻ nào
            if (!selectedCard) {
                selectedCard = card;
                card.classList.add("selected");
                return;
            }

            // Nếu click lại chính thẻ đang chọn
            if (selectedCard === card) return;

            // Khóa bàn chơi để xử lý hiệu ứng so sánh
            isProcessing = true; 

            if (selectedCard.dataset.match === card.innerText) {
                correctPair(selectedCard, card);
            } else {
                wrongPair(selectedCard, card);
            }

            selectedCard = null;
        });
    });
}

function correctPair(card1, card2) {
    card1.classList.add("correct");
    card2.classList.add("correct");

    score += 10;
    matched++;
    updateScore();

    setTimeout(() => {
        card1.style.visibility = "hidden";
        card2.style.visibility = "hidden";
        isProcessing = false; // Mở khóa bàn chơi
        checkLessonComplete();
    }, 600);
}

function wrongPair(card1, card2) {
    card1.classList.add("wrong");
    card2.classList.add("wrong");

    score -= 2;
    // Không để điểm bị âm
    if (score < 0) score = 0;
    updateScore();

    setTimeout(() => {
        card1.classList.remove("wrong", "selected");
        card2.classList.remove("wrong", "selected");
        isProcessing = false; // Mở khóa bàn chơi
    }, 600);
}

function updateScore() {
    document.getElementById("score").innerText = score;
}

function checkLessonComplete() {
    if (matched === PAIRS_PER_LESSON) {
        setTimeout(() => {
            lesson++;
            if (lesson * PAIRS_PER_LESSON >= vocabulary.length) {
                alert("🎉 Chúc mừng! Bạn đã hoàn thành toàn bộ từ vựng IT Helpdesk!");
            } else {
                loadLesson();
            }
        }, 800);
    }
}

// Hàm đọc tiếng cập nhật lại để nhận diện ngôn ngữ
function speak(word, lang) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = word;
    // Nếu là thẻ tiếng Việt thì dùng giọng vi-VN, ngược lại dùng en-US
    speech.lang = (lang === "vi") ? "vi-VN" : "en-US"; 
    speechSynthesis.speak(speech);
}

window.onload = () => {
    loadLesson();
};