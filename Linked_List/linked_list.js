class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      //리스트가 비어있다면
      this.head = node; //리스트에 첫 원소를 추가하고, head에 원소 넣어줌
    } else {
      current = this.head;

      while (current.next) {
        current = current.next; //다음노드가 null일때까지 반복
      }
      // 다음노드가 nulld이라는 건 마지막 노드라는 의미이므로, 마지막 노드에 삽입할 노드 넣어줌
      current.next = node;
    }
    length++; // 추가된 노드 길이
    return length;
  }

  removeAt(position) {
    if (position > -1 && position < length) {
      //위치가 범위 값 내에 있는지 체크
      let current = this.head,
        previous,
        index = 0;

      if (position === 0) {//첫번째 원소 삭제
        this.head = current.next;
      } else {//첫번째 위치를 제외한 위치의 원소 삭제
        while (index++ < position) {//index를 삭제할 위치까지 반복  
          previous = current; //이전 원소
          current = current.next; //다음 원소
        }
        previous.next = current.next; //현재의 이전 것과 현재의 다음 것을 연결해줌 (현재 요소 삭제 위해)
      }
      length--; //요소 삭제했으므로 리스트 길이 감소
      return current.element; 
    }
    return null; //삭제할 원소의 위치가 존재하지 않을 때 (삭제된 원소가 하나도 없음)
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log(list.removeAt(1));
