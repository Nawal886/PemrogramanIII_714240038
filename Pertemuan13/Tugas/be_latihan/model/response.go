package model

// Response adalah struct response umum
type Response struct {
	Message string      `json:"message" example:"detail pesan"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty" example:"detail error"`
}

// SuccessResponse adalah struct response untuk status 200 OK
type SuccessResponse struct {
	Message string      `json:"message" example:"data berhasil diambil"`
	Data    interface{} `json:"data,omitempty"`
}

// CreatedResponse adalah struct response untuk status 201 Created
type CreatedResponse struct {
	Message string      `json:"message" example:"data berhasil ditambahkan"`
	Data    interface{} `json:"data,omitempty"`
}

// UnauthorizedResponse adalah struct response untuk status 401 Unauthorized
type UnauthorizedResponse struct {
	Message string `json:"message" example:"token tidak valid atau tidak ditemukan"`
}

// ForbiddenResponse adalah struct response untuk status 403 Forbidden
type ForbiddenResponse struct {
	Message string `json:"message" example:"user tidak memiliki akses untuk fitur ini"`
}