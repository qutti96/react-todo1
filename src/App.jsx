import { useState } from "react"
import './index.css'

export const App = () =>{
  // todoリスト
  const [todos, setTodos] = useState(
    [
      {id: 1, title: 'todoリストに着手'},
      {id: 2, title: 'todoのタスクを洗い出す'}
    ]
  )
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoID] = useState(todos.length + 1)
  const [isEditable, setIsEditable] = useState(false)

  // 問題1. 編集したいtodoのidの状態を定義しよう
  const [editId, setEditId] = useState('')
  // 編集フォームに入力する値
  const [newTitle, setNewTitle] = useState('')

  const handleAddFormChanges = (e) => {
    setTodoTitle(e.target.value)
  }

  const addTodos = () => {
    setTodos([...todos, {id: todoId , title: todoTitle}])
    setTodoID(todoId+1)
    setTodoTitle('')
  }
// ・配列todosに、idとタイトルをもつ新しいtodoのオブジェクトを追加
// ・次回todoを再び作成する時にidが被らないようにidのstateを更新

//関数に削除対象のtodoが渡っているか確認しよう
//既存のtodosにfilterメソッドを使って、
//削除対象以外のtodoを要素としてもつ配列を作成します
//そして、その配列を新たにtodosにセットします
  const handleDeleteTodo = (targetTodo) =>{
    console.log(targetTodo)
    setTodos(todos.filter((todo) => todo !== targetTodo))
  }

  const handleOpenEditForm = (todo) => {
    setIsEditable(true)
    setEditId(todo.id)
    setNewTitle(todo.title)
  }

  const handleEditFormChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleCloseEditForm = (todo) => {
    setIsEditable(false)
    setEditId('')
    setNewTitle('')
  }

//編集保存したとき編集内容をtodoリストに反映させる
  const handleEditTodo = () => {
    const newArray = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: newTitle } : todo
    )
  setTodos(newArray)
  //編集したいtodoのidの初期化
  setEditId('')
  //編集したいtodoのタイトルのstateを初期化
  setNewTitle('')
  //編集画面を通常画面に戻す処理
  handleCloseEditForm('')
  }

  return(
    <>
    <div class="px-5 py-12 lg:px-20">
      <div class="w-full max-w-3xl md:w-auto px-10 mx-auto mt-8 my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
        <h1 className="font-bold mb-4 text-3xl text-center">Todo アプリ</h1>
          <div class="w-full mx-auto">
            <div  className="bg-yellow-50 p-8 mb-12">
              <h2 className="text-2xl font-bold mb-2">todoリスト新規作成</h2>
                    {isEditable ? (
                                    <div className="flex items-center flex-wrap">
                                        <input type="text" value={newTitle} onChange={handleEditFormChange} name="" id="" label="新しいタイトル" className="w-2/5 px-5 py-3 mr-4 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        <div className="">
                                          <button onClick={handleEditTodo} className="w-50 px-10 py-4 mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-xl hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            編集を保存
                                          </button>
                                          <button onClick={handleCloseEditForm} className="w-50 px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gray-700 rounded-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                            キャンセル
                                          </button>
                                        </div>
                                    </div>
                                  ) : (
                                    <div className="flex items-center justify-start mt-4">
                                      <input type="text" name="" id="" label="タイトル" value={todoTitle} onChange={handleAddFormChanges} className="block w-2/5 px-5 py-3 mr-4 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                      <button onClick={addTodos} className="w-50 px-10 py-4  mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-700 rounded-xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                                        todo作成！
                                      </button>
                                    </div>
                    )}
            </div>

            <div  className="bg-green-50 p-8 mb-12">
              <h2 className="text-2xl font-bold mt-4 mb-4">作成したtodo リスト</h2>
                <ul>
                  {todos.map((todo) =>
                  <li key={todo.id} className="flex items-center flex-wrap w-full mb-4">
                    <span className="block w-2/5 mr-4">{todo.title}</span>
                    <button onClick={() => handleOpenEditForm(todo)} className="w-50 px-10 py-4  mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-xl hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      totoを編集
                    </button>
                    <button onClick={() => handleDeleteTodo(todo)} className="w-50 px-10 py-4  mr-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-700 rounded-xl hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                      todo削除！
                    </button>
                  </li>)}
                </ul>
            </div>
          </div>
      </div>
    </div>
    </>

  )
}
