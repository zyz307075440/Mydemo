/**
 * Created by mr.z on 2016/4/25.
 */



//innerText������

//���ñ�ǩ�ڲ������� ���������
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

//��ȡ��ǩ֮�������  ���������
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}


//nextElementSibling ������

function getNextElement(element) {
    //�������
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //����һ���ڵ㣬ֱ���ҵ���һ��Ԫ��Ϊֹ
        var el = element.nextSibling;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}


//nextElementSibling ������

function getPreviousElement(element) {
    //�������
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        //����һ���ڵ㣬ֱ���ҵ���һ��Ԫ��Ϊֹ
        var el = element.previousSibling;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}


//firstElementChild������


function getFirstElement(element) {
    //�������
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        //����һ���ڵ㣬ֱ���ҵ���һ��Ԫ��Ϊֹ
        var el = element.firstChild;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}


//lastElementChild������


function getLastElement(element) {
    //�������
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        //����һ���ڵ㣬ֱ���ҵ���һ��Ԫ��Ϊֹ
        var el = element.lastChild;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}


function my$(id) {
    return document.getElementById(id)
}


//��װ��ȡ��ʽ���Լ�����

//�������  ����ļ���������
function getStyle(obj, attr) {
    if (obj, currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}


//scroll������
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


//client������д��
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}


//pageX �� pageY �ļ�����
function eventPage(event) {
    event = event || window.event;
    return {
        pageX: event.pageX || event.clientX + document.documentElement.scrollLeft,
        pageY: event.pageY || event.clientY + document.documentElement.scrollTop
    }
}



//�¼�ð�ݼ���
function eventStopPropagation(event) {

    event = event || window.event;

    if (event && event.stopPropagation) {

        event.stopPropagation();

    } else {

        event.cancelBubble = true;

    }
}


//�ж��¼�Ŀ�������

function eventTarget(event) {
    event = event || window.event;
    return event.target ? event.target.id : event.srcElement.id

}


//��ȡѡ�е��ַ����ļ���д��
function pitchOnString() {
    return window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;
}

//���ѡ���ַ�������д��
function clearSelect() {
   return window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}