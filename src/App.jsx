import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = 'http://localhost:5001/issues';

function App() {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState('');
  const [updateIssue, setUpdateIssue] = useState({ id: '', description: '' });

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const response = await axios.get(apiUrl);
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const createIssue = async () => {
    try {
      const response = await axios.post(apiUrl, {
        id: Date.now().toString(),
        description: newIssue,
      });
      setNewIssue('');
      fetchIssues();
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`${apiUrl}/${id}`, updateIssue);
      setUpdateIssue({ id: '', description: '' });
      fetchIssues();
    } catch (error) {
      console.error('Error updating issue:', error);
    }
  };

  const deleteIssue = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchIssues();
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Issue Tracker</h1>
      <div>
        <input
          type='text'
          value={newIssue}
          onChange={(e) => setNewIssue(e.target.value)}
          placeholder='New Issue'
        />
        <button onClick={createIssue}>Create</button>
      </div>
      <div className='issue-wrapper'>
        <ul>
          {issues.map((issue) => (
            <li key={issue.id}>
              {issue.description}
              <div className='btn-wrapper'>
                <button
                  className='btn-delete'
                  onClick={() => deleteIssue(issue.id)}
                >
                  Delete
                </button>
                <button
                  className='btn-update'
                  onClick={() =>
                    setUpdateIssue({
                      id: issue.id,
                      description: issue.description,
                    })
                  }
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {updateIssue.id && (
        <div>
          <input
            type='text'
            value={updateIssue.description}
            onChange={(e) =>
              setUpdateIssue({ ...updateIssue, description: e.target.value })
            }
            placeholder='Update Issue'
          />
          <button onClick={() => handleUpdate(updateIssue.id)}>Save</button>
        </div>
      )}
    </div>
  );
}

export default App;
