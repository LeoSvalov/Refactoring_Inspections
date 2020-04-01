# Refactoring inspection [сhange signature](https://www.jetbrains.com/help/webstorm/specific-javascript-refactorings.html#javascript_change_signature).

## 1. Примеры использования инспекции
Рефакторинг  используется в случаях когда нужно переименовать какой-либо метод,  
либо же изменить(удалить/добавить/перемеименовать) аргументы, к-ые он принимает и тип к-ый он возвращает: 

<img alt="Pic" src="https://github.com/LeoSvalov/Refactoring_Inspections/blob/master/gifs/Снимок%20экрана%202020-04-02%20в%201.42.27.png" width="500" height="600">

## 2. Примеры некорректной работы и варианты улучшения  
### 1. Запуск рефакторинга из панели проекта:
<img src="https://github.com/LeoSvalov/Refactoring_Inspections/blob/master/gifs/Inspection1.gif"/>   
Так как рефакторинг применим только к какому-то конкретному методу, думаю, что возможность вызвать этот рефакторинг из меню здесь лишняя.  
  
### 2. Некорректная работа поля Value in the call 
Если я верно понял,  данное поле позволяет присвоить новому аргументу значение в каком-то конкретном вызове метода.    
В данный момент эта фича не работает и значение будет присваиваться всем вызовам метода:  

<img src="https://github.com/LeoSvalov/Refactoring_Inspections/blob/master/gifs/Inspection3.gif"/>  
Чтобы все работало корректно, нужно находить все вызовы метода и кидать пользователю этот список когда он хочет использовать это поле.

### 3. Рефакторинг игнорирует комментарии к аргументам  
Когда у аргументов метода есть какие-либо пояснения и если мы захотим поменять порядок аргументов в методе,  
то комментарии проигнорируются и в итоге перепутаются:  

<img src="https://github.com/LeoSvalov/Refactoring_Inspections/blob/master/gifs/Inspection2.gif"/>  

### 4. "Propogate parameters" не работает  
"propogate parameters" не работает если у нас есть вложенные вызовы метода и мы меняем(добавляем, к примеру) аргументы метода.
В этих вложенных вызовах ничего не изменится:  

<img src="https://github.com/LeoSvalov/Refactoring_Inspections/blob/master/gifs/Inspection4.gif"/>
