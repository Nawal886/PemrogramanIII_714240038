package repository_test

import (
	"be_latihan/config"
	"be_latihan/model"
	"be_latihan/repository"
	"fmt"
	"testing"
	"time"
)

// Setup koneksi database + migrate
func setupTest(t *testing.T) {
	config.InitDB()

	err := config.GetDB().AutoMigrate(&model.Mahasiswa{})
	if err != nil {
		t.Fatalf("Migration failed: %v", err)
	}
}

// TEST INSERT
func TestInsertMahasiswa(t *testing.T) {
	setupTest(t)

	npm := fmt.Sprintf("%d", time.Now().UnixNano())

	mhs := model.Mahasiswa{
		NPM:    npm,
		Nama:   "Nawal Haromaen",
		Prodi:  "Informatika",
		Alamat: "Bandung",
		Email:  "nawalharomaen@gmail.com",
		NoHP:   "0895356871030",
		Hobi:   []string{"Game"},
	}

	_, err := repository.InsertMahasiswa(&mhs)
	if err != nil {
		t.Errorf("Insert failed: %v", err)
	}

	fmt.Println("INSERT SUCCESS NPM:", npm)
}

// TEST GET ALL
func TestGetAllMahasiswa(t *testing.T) {
	setupTest(t)

	data, err := repository.GetAllMahasiswa()
	if err != nil {
		t.Errorf("GetAll failed: %v", err)
	}

	if len(data) == 0 {
		t.Errorf("Expected data, got empty")
	}

	fmt.Printf("DATA: %+v\n", data)
}

// TEST GET BY NPM
func GetMahasiswaByNPM(npm string) (model.Mahasiswa, error) {
	var mhs model.Mahasiswa
	result := config.GetDB().First(&mhs, "npm = ?", npm)
	return mhs, result.Error
}

// TEST UPDATE
func UpdateMahasiswa(npm string, newData *model.Mahasiswa) (*model.Mahasiswa, error) {
	var mhs model.Mahasiswa

	db := config.GetDB()

	if err := db.First(&mhs, "npm = ?", npm).Error; err != nil {
		return nil, err
	}

	if err := db.Model(&mhs).Updates(newData).Error; err != nil {
		return nil, err
	}

	return &mhs, nil
}

func DeleteMahasiswa(npm string) error {
	result := config.GetDB().Where("npm = ?", npm).Delete(&model.Mahasiswa{})
	return result.Error
}