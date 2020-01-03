import React, { Component } from 'react';
import uuid from 'react-uuid';

const WorkContext = React.createContext();
// Provider
// Consumer

class WorkProvider extends Component {
  state = {
    works: [
      {
        id: "1",
        name: "test 1",
        status: true
      },
      {
        id: "2",
        name: "test 2",
        status: false
      },
      {
        id: "3",
        name: "test 3",
        status: false
      },
      {
        id: "4",
        name: "test 4",
        status: true
      }
    ],
    workList: [],
    formShow: false,
    workUpdating: false,
    id: '',
    txtName: '',
    stStatus: true,
    sortValue: 1
  };

  componentDidMount() {
    this.setState({
      workList: this.state.works
    });
  }
  componentWillMount() {
      if(localStorage && localStorage.getItem('works')){
          var works = JSON.parse(localStorage.getItem('works'));
          this.setState({
              works : works
          });
      }
  }

  updateItem = (id) => {
    let work = this.state.works.find(item => item.id === id);
    this.setState({
      id: id,
      txtName: work.name,
      stStatus: work.status
    })
    this.onShowForm();
  }

  onChangeForm = () => {
    this.setState({
      formShow: !this.state.formShow
    })
  }

  onShowForm = () => {
    this.setState({
      formShow: true
    })
  }

  getItem = (id) => {
    const works = this.state.works;
    const work = works.find(item => item.id === id);
    return work;
  }

  onUpdateStatus = (id) => {
    const works = this.state.works;
    let index = works.indexOf(this.getItem(id));
    works[index].status = !works[index].status;
    this.setState({
      works: works
    });
    localStorage.setItem('works', JSON.stringify(works));
  }

  onSortBy = (property = 'name', orderBy = 'asc') => {
    var works = this.state.workList;
    // more than
    var gt = { asc: 1, desc: -1 };
    // less-than
    // var lt = { asc: -1, desc: 1 };
    if (property === 'name') {
      works.sort((a, b) => {
        if(a.name > b.name) return gt[orderBy];
        else if(a.name < b.name) return -gt[orderBy];
        else return 0;
      });
    } else {
      works.sort((a, b) => {
        if(a.status > b.status) return gt[orderBy];
        else if(a.status < b.status) return -gt[orderBy];
        else return 0;
      });
    }
    this.setState({
      workList: works
    })
  }
  
  onFilterSearch = (data) => {
    var data2 = data.target.value;
    var works = this.state.works;
    // var workSearch = this.state.workSearch;
    console.log(data2.toLowerCase());
    
    works = works.filter((item) => {
      var text = item.name.toLowerCase();
      
      return text.search( data2.toLowerCase() ) !== -1;
    });
    this.setState({workList: works});
  }

  onHandleSubmit = (data) => {
    const works = this.state.works;
    if (data.txtName === '') {
      return;
    }
    if (typeof data.stStatus === "string") {
      data.stStatus = data.stStatus === 'true' ? true : false;
    }
    if (data.id !== '') {
      const work = {
        id: data.id,
        name: data.txtName,
        status: data.stStatus,
      }
      let index = works.indexOf(this.getItem(data.id));
      works[index] = work;
      console.log(index);
      
    } else {
      const work = {
        id: uuid(),
        name: data.txtName,
        status: data.stStatus,
      }
      works.push(work);
    }
    this.setState({
      works: works,
      workList: works,
      id: '',
      txtName: '',
      stStatus: true
    });
    localStorage.setItem('works', JSON.stringify(works));
    
    this.onChangeForm();
  }

  removeItem = (id) => {
    let works = [...this.state.works];
    console.log(works);
    
    works = works.filter(item => item.id !== id);

    this.setState({
      works: [...works],
      workList: [...works]
    })
    localStorage.setItem('works', JSON.stringify(works));
  }

  render() {
    return (
      <WorkContext.Provider value={{
        ...this.state,
        onChangeForm: this.onChangeForm,
        onHandleSubmit: this.onHandleSubmit,
        removeItem: this.removeItem,
        updateItem: this.updateItem,
        onUpdateStatus: this.onUpdateStatus,
        onFilterSearch: this.onFilterSearch,
        onSortBy: this.onSortBy
      }}>
      {this.props.children}
      </WorkContext.Provider>
    )
  }
}

const WorkConsumer = WorkContext.Consumer;

export { WorkProvider, WorkConsumer };
