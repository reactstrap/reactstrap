/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import {shallow, mount} from 'enzyme';
import {Paginate} from 'reactstrap';

describe('Paginate', () => {
    it('should not render prev and first on first page', () => {
        const wrapper = mount(<Paginate page={1} pages={50}/>);
        expect(wrapper.find('button').at(0).text()).toEqual('1');
        expect(wrapper.find('button').at(1).text()).toEqual('2');
    });
    it('should not render next and last on last page', () => {
        const wrapper = mount(<Paginate page={50} pages={50}/>);
        expect(wrapper.find('button').at(11).text()).toEqual('50');
        expect(wrapper.find('button').at(10).text()).toEqual('49');
    });
    it('should customize `first` `prev` `next` `last` titles', () => {

        const first   = 'FIRST',
              prev    = 'PREV',
              next    = 'NEXT',
              last    = 'LAST',
              wrapper = mount(<Paginate {...{first, prev, next, last, pages: 50, page: 30}}/>);
        expect(wrapper.find('button').at(0).text()).toEqual(first);
        expect(wrapper.find('button').at(1).text()).toEqual(prev);
        expect(wrapper.find('button').at(12).text()).toEqual(next);
        expect(wrapper.find('button').at(13).text()).toEqual(last);
    });
    it('should render 14 links', () => {
        const wrapper = mount(<Paginate page={20} pages={50}/>);
        expect(wrapper.find('button').length).toBe(14); // the number of links is 14 because of first, prev, next and last buttons
    });
    it('should render number of links based on showPages links', () => {
        const wrapper = mount(<Paginate page={1} pages={15} showPages={15}/>);
        expect(wrapper.find('button').length).toBe(16); // the number of links is 16 because next button
    });
    it('no error on when no callback is given', ()=> {
        const wrapper = mount(<Paginate page={1} pages={50}/>),
              link    = wrapper.find('button').at(5);
        expect(link.simulate.bind(link, 'click')).not.toThrow();
    });
    const pageClicker = (page, pages, index, shouldBe)=> {
        let currentPage = page,
            callback    = (_page)=> {
                currentPage = _page;
            };
        const wrapper   = mount(<Paginate page={currentPage} onClick={callback} pages={pages}/>);
        wrapper.find('button').at(index).simulate('click');
        expect(currentPage).toBe(shouldBe);
    };
    it('should callback the when a link is clicked', ()=> {
        pageClicker(1, 10, 6, 7)
    });
    it('should go to first page', ()=> {
        pageClicker(14, 100, 0, 1)
    });
    it('should go to prev page', ()=> {
        pageClicker(14, 100, 1, 13)
    });
    it('should go to next page', ()=> {
        pageClicker(14, 100, 12, 15)
    });
    it('should go to last page', ()=> {
        pageClicker(14, 100, 13, 100)
    });
    it('should set active on current page link', () => {
        let wrapper = mount(<Paginate page={1} pages={15} showPages={15}/>);
        expect(wrapper.find('.active button').text()).toBe('1');
        wrapper.setProps({page: 5});
        expect(wrapper.find('.active button').text()).toBe('5');
    });
    it('rotate pages to let current page in the middle', () => {
        const wrapper = mount(<Paginate page={1} pages={20} showPages={10} middle={true} />);
        //f: first, c: current,l: last
        /*
INDEX          0,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13
SELECT: 1   |  1,   2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 2   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 3   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 4   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 5   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 6   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 7   |  <<,  <,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, >,  >>
SELECT: 8   |  <<,  <,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, >,  >>
SELECT: 9   |  <<,  <,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, >,  >>
SELECT: 10  |  <<,  <,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14, >,  >>
SELECT: 11  |  <<,  <,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, >,  >>
SELECT: 12  |  <<,  <,  7,  8,  9,  10, 11, 12, 13, 14, 15, 16, >,  >>
SELECT: 13  |  <<,  <,  8,  9,  10, 11, 12, 13, 14, 15, 16, 17, >,  >>
SELECT: 14  |  <<,  <,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18, >,  >>
SELECT: 15  |  <<,  <,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, >,  >>
SELECT: 16  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 17  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 18  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 19  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 20  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20
*/
        [
            {f: 1, c: 1, l: 10},
            {f: 1, c: 2, l: 10},
            {f: 1, c: 3, l: 10},
            {f: 1, c: 4, l: 10},
            {f: 1, c: 5, l: 10},
            {f: 1, c: 6, l: 10},
            {f: 2, c: 7, l: 11},
            {f: 3, c: 8, l: 12},
            {f: 4, c: 9, l: 13},
            {f: 5, c: 10, l: 14},
            {f: 6, c: 11, l: 15},
            {f: 7, c: 12, l: 16},
            {f: 8, c: 13, l: 17},
            {f: 9, c: 14, l: 18},
            {f: 10, c: 15, l: 19},
            {f: 11, c: 16, l: 20},
            {f: 11, c: 17, l: 20},
            {f: 11, c: 18, l: 20},
            {f: 11, c: 19, l: 20},
            {f: 11, c: 20, l: 20},
        ].forEach((target)=> {
            let firstIndex = target.c > 1 ? target.c > 6 ? 2 : 1 : 0, // this is for prev(after first page) and first(after half of the show pages. In case of the showPages is even will add one to middle in this case 10/2 = 5 but will use 6)
                lastIndex  = firstIndex + 9;
            wrapper.setProps({page: target.c});
            let current = {
                cf: wrapper.find('button').at(firstIndex).text(),
                cl: wrapper.find('button').at(lastIndex).text(),
                    firstIndex,
                    lastIndex,
                ...target
            };
            expect(current.cf).toBe(`${current.f}`);
            expect(current.cl).toBe(`${current.l}`);
        });
    });
    it('display pages in batches based if middle is false', () => {
        const wrapper = mount(<Paginate page={1} pages={20} showPages={10} middle={false} />);
        //f: first, c: current,l: last
        /*
INDEX          0,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13
SELECT: 1   |  1,   2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 2   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 3   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 4   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 5   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 6   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 7   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 8   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 9   |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 10  |  <,   1,  2,  3,  4,  5,  6,  7,  8,  9,  10, >,  >>
SELECT: 11  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 12  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 13  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 14  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 15  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 16  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 17  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 18  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 19  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, >
SELECT: 20  |  <<,  <,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20
*/
        [
            {f: 1, c: 1, l: 10},
            {f: 1, c: 2, l: 10},
            {f: 1, c: 3, l: 10},
            {f: 1, c: 4, l: 10},
            {f: 1, c: 5, l: 10},
            {f: 1, c: 6, l: 10},
            {f: 1, c: 7, l: 10},
            {f: 1, c: 8, l: 10},
            {f: 1, c: 9, l: 10},
            {f: 1, c: 10, l: 10},
            {f: 11, c: 11, l: 20},
            {f: 11, c: 12, l: 20},
            {f: 11, c: 13, l: 20},
            {f: 11, c: 14, l: 20},
            {f: 11, c: 15, l: 20},
            {f: 11, c: 16, l: 20},
            {f: 11, c: 17, l: 20},
            {f: 11, c: 18, l: 20},
            {f: 11, c: 19, l: 20},
            {f: 11, c: 20, l: 20},
        ].forEach((target)=> {
            let firstIndex = target.c > 1 ? target.c > 10 ? 2 : 1 : 0, // this is for prev(after first page) and first(after first batch)
                lastIndex  = firstIndex + 9;
            wrapper.setProps({page: target.c});
            let current = {
                cf: wrapper.find('button').at(firstIndex).text(),
                cl: wrapper.find('button').at(lastIndex).text(),
                    firstIndex,
                    lastIndex,
                ...target
            };
            expect(current.cf).toBe(`${current.f}`);
            expect(current.cl).toBe(`${current.l}`);
            // console.log(wrapper.find('button').reduce((a,v)=>`${a ? `${a},   ` : ``}${v.text()}`,null));
        });
    });
});