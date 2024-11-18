import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { GlobalStateContext } from '../../../../../../../GlobalStateContext';
import BaseUrl from '../../../../../../../config';
import { Label } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  formContainer: {},
  mainContainer: {
    overflow: 'auto',
    maxHeight: '100vh',
  },
  gridContainer: {
    maxWidth: '100%',
    margin: '16px auto',
  },
  field: {
    marginLeft: theme.spacing(2),
    width: '92%',
  },
  menuItem: {
    backgroundColor: '#f0f0f0',
    '&:hover': {
      backgroundColor: '#d0d0d0',
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const positions = [
  { value: 'Teacher', label: 'Teacher' },
  { value: 'Assistant Teacher', label: 'Assistant Teacher' },
  { value: 'Head of the Department', label: 'Head of the Department' },
];

const StaffProfessionalInfo = ({ formData, setFormData }) => {
  const classes = useStyles();
  const { globalData } = useContext(GlobalStateContext);
  const [schoolInfo, setSchoolInfo] = useState({ Subjects: [], Grades: [] });
  const [formValues, setFormValues] = useState({
    ...formData.professionalInfo,
    position: formData.professionalInfo.position || [],
    grades: formData.professionalInfo.grades || [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchSchoolInfo = async () => {
      try {
        const response = await fetch(`${BaseUrl}/schoolinfo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ SchoolId: globalData.data.SCHOOL_ID }),
        });

        if (!response.ok) {
          const text = await response.text();
          console.error('Error fetching school info:', text);
          throw new Error('Failed to fetch school info');
        }

        const data = await response.json();
        console.log('Fetched school info:', data);

        const Grades = [];
        const gradeLevelFrom = parseInt(data.data.GradeLevelFrom.match(/\d+/)[0], 10);
        const gradeLevelTo = parseInt(data.data.GradeLevelTo.match(/\d+/)[0], 10);

        for (let i = gradeLevelFrom; i <= gradeLevelTo; i++) {
          Grades.push({ value: i, label: `Class ${i}` });
        }

        setSchoolInfo({ Subjects: data.data.Subjects, Grades });
      } catch (error) {
        console.error('Error fetching school info:', error);
      }
    };

    fetchSchoolInfo();
  }, [globalData.data.SCHOOL_ID]);

  const validateField = (name, value) => {
    let error = '';
    if (['certifications', 'qualification'].includes(name)) {
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = 'Only alphabets are allowed';
      }
    }
    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let error = validateField(name, value);

    if (!value) {
      error = 'This field is required';
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    const updatedValue = name === 'experience' ? parseInt(value, 10) : value;

    const updatedFormValues = { ...formValues, [name]: updatedValue };
    setFormValues(updatedFormValues);
    setFormData((prevData) => ({
      ...prevData,
      professionalInfo: updatedFormValues,
    }));
  };

  const handlePositionChange = (event) => {
    const { value, checked } = event.target;
    let updatedPositions = [...formValues.position];

    if (checked) {
      updatedPositions.push(value);
    } else {
      updatedPositions = updatedPositions.filter((position) => position !== value);
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      position: updatedPositions,
    }));
    setFormData((prevData) => ({
      ...prevData,
      professionalInfo: {
        ...prevData.professionalInfo,
        position: updatedPositions,
      },
    }));
  };

  const handleGradeChange = (event, index) => {
    const { value } = event.target;
    const updatedGrades = formValues.grades.map((grade, i) => (i === index ? { ...grade, value } : grade));
    setFormValues((prevValues) => ({
      ...prevValues,
      grades: updatedGrades,
    }));
    setFormData((prevData) => ({
      ...prevData,
      professionalInfo: {
        ...prevData.professionalInfo,
        grades: updatedGrades,
      },
    }));
  };

  const handleSubjectChange = (event, grade) => {
    const { value } = event.target;
    const updatedGrades = formValues.grades.map((g) => (g.value === grade ? { ...g, subjects: value } : g));

    setFormValues((prevValues) => ({
      ...prevValues,
      grades: updatedGrades,
    }));
    setFormData((prevData) => ({
      ...prevData,
      professionalInfo: {
        ...prevData.professionalInfo,
        grades: updatedGrades,
      },
    }));
  };

  const addGrade = () => {
    const newGrade = { value: '', subjects: [] };
    setFormValues((prevValues) => ({
      ...prevValues,
      grades: [...prevValues.grades, newGrade],
    }));
  };

  const deleteGrade = (index) => {
    const updatedGrades = formValues.grades.filter((_, i) => i !== index);
    setFormValues((prevValues) => ({
      ...prevValues,
      grades: updatedGrades,
    }));
  };

  return (
    <div className={classes.mainContainer}>
      <form className={classes.formContainer}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset" className={`${classes.field} urbanist-font`} style={{ marginBottom: '0px' }}>
              <label style={{ marginBottom: '12px' }}>Position / Role :</label>
              <FormGroup>
                <Grid container spacing={1}>
                  {positions.map((option) => (
                    <Grid item key={option.value}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formValues.position.includes(option.value)}
                            onChange={handlePositionChange}
                            value={option.value}
                          />
                        }
                        label={option.label}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <label variant="h6" style={{ marginBottom: '12px' }} className={`${classes.field} urbanist-font`} gutterBottom > Grade-wise Subject Selection : </label>
          </Grid>
          
          {formValues.grades.map((grade, index) => (
            <Grid container spacing={3} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id={`grade-${index}`}
                  select
                  label="Grade"
                  name={`grade-${index}`}
                  value={grade.value}
                  onChange={(e) => handleGradeChange(e, index)}
                  fullWidth
                  required
                  className={`${classes.field} urbanist-font`}
                >
                  {schoolInfo.Grades.map((option) => (
                    <MenuItem key={option.value} value={option.value} className={classes.menuItem}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.field}>
                  <InputLabel id={`subject-label-${index}`}>Subjects</InputLabel>
                  <Select
                    labelId={`subject-label-${index}`}
                    id={`subject-${index}`}
                    multiple
                    value={grade.subjects || []}
                    onChange={(e) => handleSubjectChange(e, grade.value)}
                    input={<OutlinedInput id={`select-multiple-chip-${index}`} label="Subjects" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {schoolInfo.Subjects.map((subject) => (
                      <MenuItem key={subject} value={subject}>
                        {subject}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <IconButton onClick={() => deleteGrade(index)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12} sm={6}>
            <IconButton onClick={addGrade}>
              <AddIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="experience"
              label="Years of Teaching Experience"
              name="experience"
              value={formValues.experience}
              onChange={handleChange}
              fullWidth
              type="number"
              className={`${classes.field} urbanist-font`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="qualification"
              label="Qualification"
              name="qualification"
              value={formValues.qualification}
              onChange={handleChange}
              fullWidth
              required
              className={`${classes.field} urbanist-font`}
              error={!!errors.qualification}
              helperText={errors.qualification}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="certifications"
              label="Certifications (Teaching / Training)"
              name="certifications"
              value={formValues.certifications}
              onChange={handleChange}
              fullWidth
              className={`${classes.field} urbanist-font`}
              error={!!errors.certifications}
              helperText={errors.certifications}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default StaffProfessionalInfo;