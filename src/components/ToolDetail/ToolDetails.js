import {useState, useEffect} from 'react';
import ToolModel from '../../models/ToolModel';
import {useHistory} from 'react-router-dom';

import {CgAddR} from 'react-icons/cg';
import {GiQuillInk, GiSacrificialDagger, GiDaggerRose} from 'react-icons/gi';
import {RiSkipBackFill} from 'react-icons/ri';

import NoteInput from '../Form Pieces/NoteInput';
import useNoteInputs from '../../hooks/useNoteInputs';

import './ToolDetail.scss';
import '../../Sass/Forms.scss';

const ToolDetails = props => {
    const {tool} = props;
    const history = useHistory();
    const [name, setName] = useState(tool.name);
    const [components, setComponents] = useState(tool.components);
    const [type, setType] = useState(tool.type);
    const [notes, addNote, updateNote, removeNote, setNotes] = useNoteInputs(tool.notes);
    const [editMode, setEditMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);


    useEffect(function(){
        setName(tool.name);
        setComponents(tool.components);
        setType(tool.type);
        setNotes(tool.notes);
    },[tool]);


    function isolateComponents() {
        return tool.components.map((component, i) => {
            return (
                <>
                <div className="panel-block category-name">
                    {tool.componentTypes[i]}
                </div>
                {component.map(component => {
                    return(
                        <div className="panel-block">
                            {component}
                        </div>
                    )
                })}
                </>
                
            )
        })
    }

    function toggleEdit() {
        setEditMode(!editMode);
    }

    function handleSubmit(e) {
        e.preventDefault();

        ToolModel.update(tool._id, {name, type, components, notes}).then(data => {
            console.log(data);
            return toggleEdit();
        })
    }

    function toggleDelete() {
        setDeleteMode(!deleteMode);
    }

    function handleDelete(e) {
        e.preventDefault();

        console.log(tool._id);
        ToolModel.destroy(tool._id).then(data => {
            console.log(data);
            history.push('/dashboard');
        })
    }

    return( 
        <>
        <section className="tool-show-container">
            <div className="columns">

                <div className="panel column tool-detail">
                    <p className="panel-heading">{tool.type}</p>
                    <div className="panel-block tool-name">
                        {
                        editMode ?
                        <div className="control">
                            <input 
                            className="input edit-name-field"
                            type="text"
                            name="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            /> 
                        </div> :
                        name
                        }
                    </div>
                    <div className="components">
                    {tool.components ?
                        isolateComponents() :
                        <h4>Loading...</h4>}
                    </div>
                </div>

                <div className="panel column tool-notes">
                    <p className="panel-heading"><span>Notes {editMode && <i onClick={addNote}><CgAddR /></i>}</span></p> 
                    <div className="notes">
                        <form>
                            {
                            editMode ?
                            (notes && notes.map((input, i) => {
                                return <NoteInput key={i} index={i} saveNote={updateNote} removeNote={removeNote} value={input} />
                            })) :
                            (notes && notes.map(note => {
                                return (
                                    <div>
                                        {note}
                                    </div>
                                )
                            }) )
                            }

                        </form>
                    </div>
                </div>
            </div>

        </section>




        <div className="cards">

            <div className="card edit">
                <div className="card-content">
                    <span className="edit-toggle">
                        <i className="toggle-doodle" onClick={toggleEdit}><GiQuillInk/></i>
                        {editMode ?
                        <p>Keep it how it was</p>:
                        <p>Click to make a change</p>
                        }

                    </span>

                    {editMode && <span className="edit-confirmation">
                        <p>Mean it</p>
                        <i className="update-doodle" onClick={handleSubmit}><GiDaggerRose/> </i>
                    </span>
                    }
                </div>
            </div>

            <div className="card delete-info">
                <div className="card-content">
                    <p>Don't wanna keep this one anymore?</p>
                    <p>That's what knives are for</p>
                    <i onClick={toggleDelete}><GiSacrificialDagger /></i>
                </div>
            </div>

            {deleteMode &&
            <div className="card delete-confirmation">
                <div className="card-content">
                    <p>Are you sure? There's no bringing this back once it's gone.</p>
                    <i className="confirm" onClick={handleDelete}><GiSacrificialDagger /></i>
                    <i className="back" onClick={toggleDelete}><RiSkipBackFill /></i>
                </div>
            </div>
            }

        </div>

        </>
    )
}

export default ToolDetails;