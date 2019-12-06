<template>
  <div class="app">
    <el-button type="primary" @click="dialogFormVisible= true" round>添加</el-button>
       <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="ID"
              prop="id">
            </el-table-column>
            <el-table-column
              label="Name"
              prop="title">
            </el-table-column>
             <el-table-column
              label="年龄"
              prop="mag">
            </el-table-column>
             <el-table-column
              label="电话"
              prop="phone">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                操作
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.row)">修改</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
      </el-table>
      <el-dialog title="添加人物" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="名字" :label-width="formLabelWidth">
              <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
              <el-input v-model="form.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="none">取 消</el-button>
            <el-button type="primary" @click="add">确 定</el-button>
          </div>
      </el-dialog>
       <el-pagination
          background
          :page-size="page"
          :page-sizes="[2,4,6]"
          layout="sizes, prev, pager, next"
          :total="7"
          @current-change="app"
          @size-change="handleSizeChange"
          >
         
      </el-pagination>
      
  </div>
</template>

<script>
import axios from 'axios'
  export default {
     data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        form: {
          title: '',
          age: '',
          phone: '',
        },
        formLabelWidth: '120px',
        num:0,
        page:2
      }
    },
     methods: {
       //换个数
       handleSizeChange(page){
         this.page=page
         this.list()
       },
       //换业
       app(num){
        this.num=num-1
        this.list()
       },
       list(){
              axios.get("/api/data",{
              params:{
                  num:this.num,
                  page:this.page
              }
            }).then(res=>{
              this.tableData=res.data.list
            })
       },
       none(){
         this.dialogFormVisible = false
         this.form={
          title: '',
          age: '',
          phone: '',
        }
       },
       //添加
       add(){
          this.dialogFormVisible= false
          if(this.form.title){
             axios.get("/api/xuxu",{
            params:{
              ...this.form
            }
          }).then(res=>{
            alert(res.data.mag)
            console.log('tag', res.data.err)
            this.list()
          })
          }else{
            axios.get("/api/add",{
            params:{
              ...this.form
            }
          }).then(res=>{
            alert(res.data.mag)
            this.list()
          })
          }
          this.form={
          title: '',
          age: '',
          phone: '',
        }
       },
       //修改
      handleEdit(row) {
        console.log('tag',row )
        this.form={...row}
        this.dialogFormVisible= true
      },
      //删除
      handleDelete(row) {
        axios.get("/api/delete",{
          params:{
            id:row.id
          }
        }).then(res=>{
          alert(res.data.mag)
           this.list()
        })
      }
    },
    created() {
      this.list()
    },
    
  }
</script>

<style lang="scss">

</style>